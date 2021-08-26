import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { OtpService } from 'src/common/services/otp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.sass']
})

export class OtpComponent{
  public oneTimeCodeForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder, 
    private otpService : OtpService, 
    private router:Router) {
    this.oneTimeCodeForm = this.formBuilder.group({
      oneTimeCode: this.formBuilder.control(null, [Validators.required, Validators.nullValidator])
    })
  }
  public get oneTimeCode(): AbstractControl | null {
    return this.oneTimeCodeForm.get('oneTimeCode');
  }

  public onSubmit() {
    this.otpService.validateOtp(this.oneTimeCode?.value).subscribe(
      () => {this.router.navigate(["../otp"])},
      (error) => { console.error(error) },
    )
  }

}