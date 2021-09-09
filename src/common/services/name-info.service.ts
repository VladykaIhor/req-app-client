import { HttpClient } from "@angular/common/http";
import { Injectable, NgModule } from '@angular/core';
import { Observable } from "rxjs";
import { NameInfo } from "../model/name-info.model";


@Injectable()
export class NameInfoService {
    constructor(private http: HttpClient){}

    public reqIIUrl: string = "/users-ws/requisition/social-info";

    public sendUserNameDetails(nameInfo : NameInfo): Observable<string> {
        return this.http.post<string>( this.reqIIUrl, {nameInfo});
    }
}