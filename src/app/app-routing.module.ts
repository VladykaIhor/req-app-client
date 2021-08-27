import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpComponent } from './authorisation/otp/otp.component';
import { HomeComponent } from './home/home.component';
import { RequisitionComponent } from './requisition/requisition/requisition.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'otp', component: OtpComponent,
    // children: [
    //   {
    //     path: 'profile',
    //     pathMatch: 'full',
    //     component: ProfileComponent,
    //   },
    //   {
    //     path: 'details',
    //     component: DetailsComponent,
    //   },
    // ],
  },
  {path: 'nameForm', component: RequisitionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
