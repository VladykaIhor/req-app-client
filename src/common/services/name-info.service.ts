import { HttpClient } from "@angular/common/http";
import { Injectable, NgModule } from '@angular/core';
import { Observable } from "rxjs";
import { NameInfo } from "../model/name-info.model";


@Injectable()
export class NameInfoService {
    constructor(private http: HttpClient){}

    public reqIUrl: string = "/users-ws/requisition/name-info";

    public sendUserNameDetails(nameInfo : NameInfo): Observable<string> {
        return this.http.post<string>( this.reqIUrl, {nameInfo});
    }
}