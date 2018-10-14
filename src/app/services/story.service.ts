import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Story } from '../models/story.model';

@Injectable()
export class StoryService {
  stories: Story[];
  baseURL: string;

  constructor(private httpClient: HttpClient) {
    this.baseURL = 'http://localhost:7777/service';
  }

  public getStories(): Promise<Story[]> {

    const htmlOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.get<any[]>(this.baseURL + '/getStories', htmlOptions)
      .toPromise()
      .then((res): Story[] => {
        console.log(res);
        return res.map(exp => new Story(exp));
      })
      .catch(err => {
        console.log(err);
        throw (err);
      });
  }

  public saveStory(story: Story): Promise<void> {
    const htmlOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post(this.baseURL + '/addStory', JSON.stringify(story), htmlOptions)
      .toPromise()
      .then(() => {
        console.log('Success');
      })
      .catch(err => {
        console.log(err);
      });
  }
}
