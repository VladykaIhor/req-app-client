import { UserInterface } from '../interfaces/user.interface';

export class UserModel {

  constructor(
    public phoneNumber?: string
  ) {
    this.phoneNumber = phoneNumber
  }
}
