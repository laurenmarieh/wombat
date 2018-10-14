import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  newUser = new UserModel();

  constructor(private userService: UserService) { }

  public register(): void {
    this.userService.registerUser(this.newUser);
  }

}
