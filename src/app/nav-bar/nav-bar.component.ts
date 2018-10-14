import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'navBarComponent',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['../app.component.css']
})

export class NavBarComponent implements OnInit {
   loggedOn: boolean = false;
   userName: string;
    
   constructor(private customerService: CustomerService, private userService: UserService){}

    ngOnInit(){
        this.loggedOn = this.customerService.isLogged();
        
        if(this.loggedOn){
            this.userService.getUser()
            .then(res => {
                this.userName = res.userName;
            });
        }
    }

}