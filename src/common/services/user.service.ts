import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
  
  public authenticated = false;
  public loginUrl: string = "/users-ws/login";
  constructor(private httpClient: HttpClient) {}
  
  
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
  // public getUser(): Observable<UserModel> {
  //   return new Observable<UserModel>((subject) => {
  //     setTimeout(() => {
  //       subject.next(new UserModel());
  //     }, 5000);
  //   });
  // }
  
  // parse response from observable -> redirect to /otp -> send otp to server and verify (another service) -> fill in requisition form 
  public sendOtp(phoneNumber: String): Observable<string> {
    return this.httpClient.post<string>( this.loginUrl, { phoneNumber });
  }
}
