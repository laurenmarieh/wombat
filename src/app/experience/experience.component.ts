import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {
    edit: boolean = false;

    ngOnInit(): void {

    };

    public switchModes() {
        this.edit = !this.edit;
    };
};
