import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequisitionI } from 'src/common/model/requisitionI.model';
import { RequisitionIService } from 'src/common/services/requisitionI.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.sass']
})
export class RequisitionComponent {

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
  constructor(private formBuilder: FormBuilder, private requisitionIService: RequisitionIService, private router: Router) {
    this.nameForm = this.formBuilder.group({
      phoneNumber: this.formBuilder.control(null, [Validators.required, Validators.nullValidator])
    })
  }
  onSubmit() {
    this.requisitionIService.sendUserNameDetails(this.nameForm.value).subscribe(
      () => { this.router.navigate(["../reqII"]) },
      (error) => { console.error(error) },
    )
  }

}
