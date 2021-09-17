import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { LoginInfoInterface } from "../interfaces/login-info.interface";
import { UserService } from "./user.service";



@Injectable()
export class OtpService {  

  private loginUrl: string = "/users-ws/login";
  private smsCodeDTO!: LoginInfoInterface;

  constructor(private http: HttpClient, private userService : UserService){}
    

    public validateOtp(otp: string): Observable<string> {
        this.smsCodeDTO = this.userService.smsCodeDTO;
        this.smsCodeDTO.otp = otp;
        return this.http.post<string>(this.loginUrl, this.userService.smsCodeDTO);
    }
}