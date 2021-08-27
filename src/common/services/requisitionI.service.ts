import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { RequisitionI } from "../model/requisitionI.model";


@Injectable()
export class RequisitionIService {
    constructor(private http: HttpClient){}

    public reqIUrl: string = "/users-ws/requisitionI";

    public sendUserNameDetails(reqI :RequisitionI): Observable<string> {
        return this.http.post<string>( this.reqIUrl, {reqI});
    }
}