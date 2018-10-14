import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {
  user: UserModel;
  baseURL: string;
  TOKEN = 'TOKEN';

  constructor(private httpClient: HttpClient) {
    this.baseURL = 'http://localhost:7777/service';
  }

  public getUser(): Promise<UserModel> {

    const id = localStorage.getItem(this.TOKEN);

    const htmlOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post(this.baseURL + '/getUser', { 'id': id }, htmlOptions)
      .toPromise()
      .then((res): UserModel => {
        this.user = new UserModel(res[0]);
        return this.user;
      })
      .catch(err => {
        console.log(err);
        throw (err);
      });
  }

  public registerUser(user: UserModel): Promise<void> {
    const htmlOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post(this.baseURL + '/register', JSON.stringify(user), htmlOptions)
      .toPromise()
      .then(() => {
        console.log('Success');
      })
      .catch(err => {
        console.log(err);
      });
  }
}
