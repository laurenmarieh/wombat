import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'navBarComponent',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['../app.component.css']
})

export class NavBarComponent implements OnInit {
   userName: string;
    
   constructor(private customerService: CustomerService, private userService: UserService){}
    title: string = 'anchor';
    
    ngOnInit(){
        if(this.loggedOn){
            this.userService.getUser()
            .then(res => {
                this.userName = res.userName;
            });
        }
    }

    public logOff(){
        localStorage.removeItem('TOKEN');
    }

    get loggedOn(){
        return this.customerService.isLogged();
    }

}