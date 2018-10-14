import {Component} from '@angular/core';
import {ApiService} from '../services/api.service';
import {CustomerService} from '../services/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  email : string;
  password : string;

  constructor(private api: ApiService, private customer: CustomerService, private router: Router) {
    this.email = '';
    this.password = '';
  }

  tryLogin() {
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if(r.error != ''){
            alert(r.error);
          }
          
          if (r.token) {
            this.customer.setToken(r.token);
            this.router.navigateByUrl('/');
          }
        },
        r => {
          alert(r.error.error);
        });
  }
}