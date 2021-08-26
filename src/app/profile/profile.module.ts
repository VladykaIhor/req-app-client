import { RouterModule } from "@angular/router";
import { OtpComponent } from "../authorisation/otp/otp.component";
import { DetailsComponent } from "./details/details.component";
import { AppRoutingModule } from "../app-routing.module";
import { HomeComponent } from "../home/home.component";
import { AppComponent } from "../app.component";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
      AppComponent,
      DetailsComponent,
      HomeComponent
    ],
    imports: [
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [OtpComponent]
  })

  export class profileModule { }
