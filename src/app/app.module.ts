import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/common/services/user.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OtpComponent } from './authorisation/otp/otp.component';
import { AppComponent } from './app.component';
import { OtpService } from 'src/common/services/otp.service';
import { RequisitionComponent } from './requisition/requisition/requisition.component';

@NgModule({
  declarations: [
    // DetailsComponent,
    RequisitionComponent,
    HomeComponent,
    OtpComponent,
    AppComponent,
    RequisitionComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, OtpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
