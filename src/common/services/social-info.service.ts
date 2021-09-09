import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { SocialInfo } from '../model/social-info.model';


@Injectable({
  providedIn: 'root'
})
export class SocialInfoService {
  public reqUrl: string = "/users-ws/requisition/income-and-email-info";
  constructor(private http: HttpClient) { }


  public sendSocialInfo(socialInfo: SocialInfo): Observable<string> {
    return this.http.post<string>(this.reqUrl, { socialInfo });
  }

}
