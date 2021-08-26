import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/common/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {

  public phoneNumberForm: FormGroup;
    // private readonly PHONE_NUMBER_REGEX: RegExp = new RegExp(); -- phone number Regex validator

  public get phoneNumber(): AbstractControl | null {
    return this.phoneNumberForm.get('phoneNumber');
  }

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UserService,
    private router: Router
  ) {
    this.phoneNumberForm = this.formBuilder.group({
      phoneNumber: this.formBuilder.control(null, [Validators.required, Validators.nullValidator])
    })
  }

  public onSubmit() {
    this.usersService.sendOtp(this.phoneNumber?.value).subscribe(
      () => {this.router.navigate(["../otp"])},
      (error) => { console.error(error) },
    )
  }
  authenticated() { return this.usersService.authenticated; }

}
