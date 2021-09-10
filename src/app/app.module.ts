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
import { NameInfoService } from 'src/common/services/name-info.service';
import { NameInfoComponent } from './requisition/name_info/name-info/name-info.component';
import { SocialInfoComponent } from './requisition/social_info/social-info/social-info.component';
import { IncomeAndEmailInfoComponent } from './requisition/income_and_email_info/income-and-email-info/income-and-email-info.component';
import { IncomeAndEmailService } from 'src/common/services/income-and-email.service';
import { SocialInfoService } from 'src/common/services/social-info.service';


@NgModule({
  declarations: [
    HomeComponent,
    OtpComponent,
    AppComponent,
    NameInfoComponent,
    SocialInfoComponent,
    IncomeAndEmailInfoComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, OtpService, NameInfoService, IncomeAndEmailService, SocialInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
