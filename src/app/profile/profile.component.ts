import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserModel} from '../../common/model/user.model';
import {UserService} from '../../common/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public user: UserModel;

  constructor( 
    private userService: UserService) {
    this.user = new UserModel()
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user: UserModel) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }
}
