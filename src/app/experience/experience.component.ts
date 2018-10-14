import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent implements OnInit {
    edit: boolean;
    experiences: Experience[];
    newExperience: Experience;

    constructor(private experienceService: ExperienceService){}

    ngOnInit(): void {
        this.edit = false;
        this.experienceService.getExperiences()
        .then(response => this.experiences = response);
        this.newExperience = new Experience();
    };

    public switchModes(): void {
        this.edit = !this.edit;
    };

    public postExperience(): void {
        this.edit = false;
        this.experienceService.saveExperience(this.newExperience)
            .then(() => {
                console.log("It succeeded for great justice");
                this.experiences.push(this.newExperience);
                this.newExperience = new Experience();
            }
            );
       
    }

    public setRating(rating:number){
        this.newExperience.rating = rating;
    }
};
