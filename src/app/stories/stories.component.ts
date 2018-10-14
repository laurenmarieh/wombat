import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  edit: boolean;
  stories: Story[];
  newStory: Story;

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.edit = false;
    this.storyService.getStories()
      .then(response => this.stories = response);
    this.newStory = new Story();
  }

  public switchModes(): void {
    this.edit = !this.edit;
  }

  public postStory(): void {
    this.edit = false;
    this.storyService.saveStory(this.newStory)
      .then(() => {
        console.log('It succeeded for great justice');
        this.stories.push(this.newStory);
        this.newStory = new Story();
      });
  }

}
