import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TagInputModule } from 'ngx-chips';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForumComponent } from './forum/forum.component';
import { LoaderComponent } from './loader/loader.component';
import { SpeakComponent } from './speak/speak.component';
import { ServicesModule } from './services/services.module';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoaderComponent,
    SpeakComponent,
    ForumComponent,
    ForumDetailComponent
  ],
  imports: [
    BrowserModule,
    TagInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
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
    CollapseModule,
    ModalModule
  ]
})
export class AppModule { }
