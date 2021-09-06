import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpComponent } from './authorisation/otp/otp.component';
import { HomeComponent } from './home/home.component';
import { NameInfoComponent } from './requisition/name_info/name-info/name-info.component';
import { SocialInfoComponent } from './requisition/social_info/social-info/social-info.component';
import { IncomeAndEmailInfoComponent } from './requisition/income_and_email_info/income-and-email-info/income-and-email-info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'requisition/name-info', component: NameInfoComponent},
  { path: 'requisition/social-info', component: SocialInfoComponent},
  { path: 'requisition/income-and-email-info', component: IncomeAndEmailInfoComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
