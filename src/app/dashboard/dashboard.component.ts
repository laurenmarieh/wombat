import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../models/dashboard-card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardCards: DashboardCard[];
  enteredText: string;
  translated: string;

  constructor() {
    this.dashboardCards = [
      {
        title: 'Forums',
        imageUrl: '../../assets/images/forum.jpg',
        description: 'A place for you to talk with your community',
        route: '/forum'
      },
      {
        title: 'Stories',
        imageUrl: '../../assets/images/stories.jpg',
        description: 'Share your personal experiences',
        route: '/stories'
      },
      {
        title: 'Employment',
        imageUrl: '../../assets/images/employment.jpg',
        description: 'Resources to help you find employment',
        route: '/employment'
      },
      {
        title: 'Medical',
        imageUrl: '../../assets/images/medical.jpg',
        description: 'Medical resources',
        route: '/medical'
      },
      {
        title: 'Legal',
        imageUrl: '../../assets/images/legal.png',
        description: 'Legal resources',
        route: '/legal'
      },
      {
        title: 'Education',
        imageUrl: '../../assets/images/education.jpg',
        description: 'Education resources',
        route: '/education'
      },
      {
        title: 'Financial',
        imageUrl: '../../assets/images/financial.jpeg',
        description: 'Financial resources',
        route: '/financial'
      }
    ];
  }

  ngOnInit(): void {
  }
}
