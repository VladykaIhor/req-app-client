import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";


@Injectable()
export class OtpService {
    constructor(private http: HttpClient){}

    public otpUrl: string = "/users-ws/otp";

    public validateOtp(otp: String): Observable<string> {
        return this.http.post<string>( this.otpUrl, { otp });
      }
}