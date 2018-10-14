import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model'

@Injectable()
export class UserService {
  user: UserModel;
  baseURL: string;
  TOKEN: string = 'TOKEN';
  
  constructor(private httpClient: HttpClient) {
    this.baseURL = "http://localhost:7777/service";
  }

  public getUser() : Promise<UserModel> {
    
    var id = localStorage.getItem(this.TOKEN);

    var htmlOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post(this.baseURL + '/getUser', {"id":id}, htmlOptions)
      .toPromise()  
      .then((res): UserModel => {
        console.log(res);
        this.user = new UserModel(res[0]); 
        return this.user;
      }) 
    .catch(err => {
      console.log(err);
      throw(err);
    });  
  }

}