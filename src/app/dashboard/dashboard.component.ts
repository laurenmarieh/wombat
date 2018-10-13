import { Component } from '@angular/core';
import { DashboardCard } from '../models/dashboard-card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  dashboardCards: DashboardCard[];

  constructor() {
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
}
