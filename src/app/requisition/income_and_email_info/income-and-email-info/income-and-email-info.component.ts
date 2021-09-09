import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IncomeAndEmailService } from 'src/common/services/income-and-email.service';

@Component({
  selector: 'app-income-and-email-info',
  templateUrl: './income-and-email-info.component.html',
  styleUrls: ['./income-and-email-info.component.scss']
})

export class IncomeAndEmailInfoComponent {
  public incomeAndEmailForm: FormGroup;

  public get income(): AbstractControl | null {
    return this.incomeAndEmailForm.get('income');
  }
  public get email(): AbstractControl | null {
    return this.incomeAndEmailForm.get('email');
  }
  constructor(private formBuilder: FormBuilder, private incomeAndEmailService: IncomeAndEmailService, private router: Router) {
    this.incomeAndEmailForm = this.formBuilder.group({
      passportNumber: this.formBuilder.control(null, [Validators.required, Validators.nullValidator]),
      isMarried: this.formBuilder.control(null, [Validators.required, Validators.nullValidator])
    })
  }


  onSubmit() {
    this.incomeAndEmailService.sendSocialInfo(this.incomeAndEmailForm.value).subscribe(
      () => { this.router.navigate(["../requisition/socialInfo"]) },
      (error) => { console.error(error) },
    )
  }

}
