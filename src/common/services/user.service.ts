import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginInfoInterface } from '../interfaces/login-info.interface';
import { LoginInfo } from '../model/login-info.model';

@Injectable()
export class UserService {

  public authenticated = false;
  public sendOtpToUser: string = "/users-ws/sendOtp";
  public smsCodeDTO!: LoginInfoInterface;
  constructor(private httpClient: HttpClient) { }


  public savePhoneNumber(phoneNumber:string): void {
    this.smsCodeDTO = new LoginInfo("", phoneNumber);
  }

  public sendOtp(principal: string): Observable<string> {
    this.savePhoneNumber(principal);
    return this.httpClient.post<string>(this.sendOtpToUser, { principal });
  }


  authenticate(phoneNumber: string, callback: any) {
    const headers = new HttpHeaders(phoneNumber ? {
      authorization: 'Basic ' + btoa(phoneNumber)
    } : {});

    this.httpClient.get('user', { headers: headers }).subscribe(response => {
      if (response) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });
  }


}
