import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Experience } from '../models/experience'

@Injectable()
export class ExperienceService {
  experiences: Experience[];

  constructor(private httpClient: HttpClient) {}

  public getExperiences() : Experience[] {
    this.experiences = [];  
    var exp1 = new Experience();
      exp1.title = "Temp Title 1";
      exp1.author = "Lauren";
      exp1.text = "Temp text 2, oh yeah such goodness!"
      exp1.rating = 1;
      exp1.tags = ["tag1", "tag2"];
      exp1.location = "Here and There";

      var exp2 = new Experience();
      exp2.title = "Temp Title 2";
      exp2.author = "Keri";
      exp2.text = "Temp text 2, oh yeah such goodness!"
      exp2.rating = 3;
      exp2.tags = ["tag1", "tag2"];
      exp2.location = "Here and There";

      this.experiences.push(exp1);
      this.experiences.push(exp2);

      return this.experiences;
    }
}