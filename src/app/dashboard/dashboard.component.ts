import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../models/dashboard-card.model';
import { GeneralService } from '../services/general.service';
import { TranslationService } from '../services/translation.service';
import { Language } from '../models/language.enum';
import { Translation } from '../models/translation.model';

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
    private translateService: TranslationService
  ) {
    this.dashboardCards = [
      {
        title: 'Test',
        imageUrl: '../../assets/images/trees.jpg',
        description: 'test',
        route: '/dashboard'
      },
      {
        title: 'Test',
        imageUrl: '../../assets/images/city.jpg',
        description: 'test',
        route: '/dashboard'
      },
      {
        title: 'Test',
        imageUrl: '../../assets/images/lake.jpg',
        description: 'test',
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
    this.translateService.tranlateText(this.enteredText, Language.Spanish)
      .subscribe((translations: Translation[]) => {
        if (translations.length) {
          this.translated = translations[0].translatedText;
        }
      });
  }
}
