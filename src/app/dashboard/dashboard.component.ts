import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../models/dashboard-card.model';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardCards: DashboardCard[];

  constructor(private generalService: GeneralService) {
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
      console.log(text);
    });
  }
}
