import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NameInfoService } from 'src/common/services/name-info.service';

@Component({
  selector: 'app-name-info',
  templateUrl: './name-info.component.html',
  styleUrls: ['./name-info.component.sass']
})
export class NameInfoComponent {

  public nameForm: FormGroup;

  public get firstName(): AbstractControl | null {
    return this.nameForm.get('firstName');
  }
  public get lastName(): AbstractControl | null {
    return this.nameForm.get('lastName');
  }
  public get fathersName(): AbstractControl | null {
    return this.nameForm.get('fathersName');
  }
  constructor(private formBuilder: FormBuilder, private nameInfoService: NameInfoService, private router: Router) {
    this.nameForm = this.formBuilder.group({
      firstName: this.formBuilder.control(null, [Validators.required, Validators.nullValidator]),
      lastName: this.formBuilder.control(null, [Validators.required, Validators.nullValidator]),
      fathersName: this.formBuilder.control(null, [Validators.required, Validators.nullValidator])
    })
  }
  onSubmit() {
    this.nameInfoService.sendUserNameDetails(this.nameForm.value).subscribe(
      () => { this.router.navigate(["../requisition/socialInfo"]) },
      (error) => { console.error(error) },
    )
  }

  ngOnInit(): void {
  }

}