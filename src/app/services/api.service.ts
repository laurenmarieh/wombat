
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from '../models/loginResult.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    baseURL: string;
    constructor(private http: HttpClient) {
        this.baseURL = "http://localhost:7777/service";
  }

  login(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>(this.baseURL + '/login', {
      email: email,
      password: password
    });
  }
}