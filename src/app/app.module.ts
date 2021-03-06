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
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ExperienceComponent } from './experience/experience.component';
import { ServicesModule } from './services/services.module';
import { ForumComponent } from './forum/forum.component';
import { LoaderComponent } from './loader/loader.component';
import { SpeakComponent } from './speak/speak.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { StoriesComponent } from './stories/stories.component';
import { EmploymentComponent } from './employment/employment.component';
import { MedicalComponent } from './medical/medical.component';
import { LegalComponent } from './legal/legal.component';
import { FinancialComponent } from './financial/financial.component';
import { EducationComponent } from './education/education.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {ForumDetailInSpanishComponent} from './forum-detail-in-spanish/forum-detail-in-spanish.component';
import { RegisterComponent } from './register/register.component';
import { TransportationComponent } from './transportation/transportation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MapComponent } from './map/map.component';
import { KeyContactsComponent } from './key-contacts/key-contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExperienceComponent,
    LoaderComponent,
    SpeakComponent,
    ForumComponent,
    ForumDetailComponent,
    TranslatePipe,
    LoginPageComponent,
    ProfileViewComponent,
    StoriesComponent,
    EmploymentComponent,
    MedicalComponent,
    LegalComponent,
    FinancialComponent,
    EducationComponent,
    NavBarComponent,
    ForumDetailInSpanishComponent,
    RegisterComponent,
    TransportationComponent,
    CalendarComponent,
    MapComponent,
    KeyContactsComponent
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
    HttpClientModule,
    AngularFontAwesomeModule
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
