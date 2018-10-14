import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class GeneralService {
  constructor(private httpClient: HttpClient) { }

  public getText(): Observable<any> {
    return this.httpClient.get('http://localhost:7777/service');
  }
}
