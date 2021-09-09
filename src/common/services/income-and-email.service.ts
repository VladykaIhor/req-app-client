import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IncomeAndEmail } from '../model/income-and-email.model';

@Injectable({
  providedIn: 'root'
})
export class IncomeAndEmailService {

  // public reqUrl: string = "/users-ws/requisition/income-and-email-info";
  constructor(private http: HttpClient, private incomeAndEmailService: IncomeAndEmailService) { }


  public sendSocialInfo(incomeAndEmail: IncomeAndEmail): Observable<string> {
    return this.http.post<string>("/users-ws/requisition/income-and-email-info", { incomeAndEmail });
  }
}
