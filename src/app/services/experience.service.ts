import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Experience } from '../models/experience'

@Injectable()
export class ExperienceService {
  experiences: Experience[];
  baseURL: string;
  
  constructor(private httpClient: HttpClient) {
    this.baseURL = "http://localhost:7777/service";
  }

  public getExperiences() : Promise<Experience[]> {
    
    var htmlOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.get<any[]>(this.baseURL + '/getExperiences', htmlOptions)
      .toPromise()  
      .then((res): Experience[] => {
        console.log(res);
        return res.map(exp => new Experience(exp));
      }) 
    .catch(err => {
      console.log(err);
      throw(err);
    });  
  }

    public saveExperience(experience: Experience) : Promise<void> {
      var htmlOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

      return this.httpClient.post(this.baseURL + '/addExperience', JSON.stringify(experience), htmlOptions)
        .toPromise()
        .then(() => {
          console.log("Success");
        })
        .catch(err => {
          console.log(err);
        })
    }
  }