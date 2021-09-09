import {Component} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/common/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Requisition Application';
  constructor () {
    // this.app.authenticate("", undefined);
  }
}
