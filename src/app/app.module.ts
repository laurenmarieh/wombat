import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExperienceComponent } from './experience/experience.component';
import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ServicesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  exports: [
    BsDropdownModule,
    ButtonsModule,
    CollapseModule
  ]
})
export class AppModule { }
