import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OtpService } from 'src/common/services/otp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})

export class OtpComponent{
  public oneTimeCodeForm: FormGroup;
 
  constructor(
    private formBuilder: FormBuilder, 
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
      () => {this.router.navigate(["../requisition/name-info"])},
      (error) => { console.error(error) },
    )
  }
  
}