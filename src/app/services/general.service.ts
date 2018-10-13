import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class GeneralService {
  constructor(private httpClient: HttpClient) {}

 
  public getText(): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*'
      })
    };
    return this.httpClient.get('http://localhost:7777/hello', httpOptions);
  }
}
