import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialInfoService } from 'src/common/services/social-info.service';
@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.scss']
})
export class SocialInfoComponent {

  public socialInfoForm: FormGroup;

  public get passportNumber(): AbstractControl | null {
    return this.socialInfoForm.get('passportNumber');
  }
  public get isMarried(): AbstractControl | null {
    return this.socialInfoForm.get('isMarried');
  }
  constructor(private formBuilder: FormBuilder, private socialInfoService: SocialInfoService, private router: Router) {
    this.socialInfoForm = this.formBuilder.group({
      passportNumber: this.formBuilder.control(null, [Validators.required, Validators.nullValidator]),
      isMarried: this.formBuilder.control(null, [Validators.required, Validators.nullValidator])
    })
  }


  onSubmit() {
    this.socialInfoService.sendSocialInfo(this.socialInfoForm.value).subscribe(
      () => { this.router.navigate(["../requisition/socialInfo"]) },
      (error) => { console.error(error) },
    )
  }

}
