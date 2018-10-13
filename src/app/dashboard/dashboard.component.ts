import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../models/dashboard-card.model';
import { GeneralService } from '../services/general.service';
import { TranslationService } from '../services/translation.service';
import { Language } from '../models/language.enum';
import { Translation } from '../models/translation.model';
import { SpeechService } from '../services/speech.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardCards: DashboardCard[];
  enteredText: string;
  translated: string;

  constructor(
    private generalService: GeneralService,
    private translateService: TranslationService,
    private speechService: SpeechService
  ) {
    this.dashboardCards = [
      {
        title: 'Forums',
        imageUrl: '../../assets/images/forum.jpg',
        description: 'A place for you to talk with your community',
        route: '/dashboard'
      },
      {
        title: 'Stories',
        imageUrl: '../../assets/images/stories.jpg',
        description: 'Share your personal experiences',
        route: '/dashboard'
      },
      {
        title: 'Employment',
        imageUrl: '../../assets/images/employment.jpg',
        description: 'Resources to help you find employment',
        route: '/dashboard'
      },
      {
        title: 'Medical',
        imageUrl: '../../assets/images/medical.jpg',
        description: 'Medical resources',
        route: '/dashboard'
      },
      {
        title: 'Legal',
        imageUrl: '../../assets/images/legal.png',
        description: 'Legal resources',
        route: '/dashboard'
      },
      {
        title: 'Education',
        imageUrl: '../../assets/images/education.jpg',
        description: 'Education resources',
        route: '/dashboard'
      },
      {
        title: 'Financial',
        imageUrl: '../../assets/images/financial.jpeg',
        description: 'Financial resources',
        route: '/dashboard'
      }
    ];
  }

  ngOnInit(): void {
    this.generalService.getText().subscribe(text => {
      console.log(JSON.stringify(text));
    });
  }

  public translateText() {
    this.speechService.speak(this.enteredText);
  }
}
