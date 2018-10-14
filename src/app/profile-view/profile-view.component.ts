import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})

export class ProfileViewComponent implements OnInit {
  user: UserModel;
  photoLink: string;
  whatsAppLink: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.photoLink = "../../assets/images/";
    this.whatsAppLink = "https://api.whatsapp.com/send?phone=";
    
    this.userService.getUser()
      .then(res => {
        this.user = res;
        this.photoLink = this.photoLink + this.user.photo;
        this.whatsAppLink = this.whatsAppLink + this.user.whatsAppID;
      });
    
      let isFriend = true;
  }

}
