import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakComponent } from './speak/speak.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExperienceComponent } from './experience/experience.component';
import { ForumComponent } from './forum/forum.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { EmploymentComponent } from './employment/employment.component';
import { LegalComponent } from './legal/legal.component';
import { MedicalComponent } from './medical/medical.component';
import { FinancialComponent } from './financial/financial.component';
import { StoriesComponent } from './stories/stories.component';
import { EducationComponent } from './education/education.component';
import {ForumDetailInSpanishComponent} from './forum-detail-in-spanish/forum-detail-in-spanish.component';
import { RegisterComponent } from './register/register.component';
import { TransportationComponent } from './transportation/transportation.component';
import { MapComponent } from './map/map.component';
import { KeyContactsComponent } from './key-contacts/key-contacts.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'speak', component: SpeakComponent},
  { path: 'forum', component: ForumComponent },
  { path: 'forum/:id', component: ForumDetailComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'employment', component: EmploymentComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'medical', component: MedicalComponent },
  { path: 'financial', component: FinancialComponent },
  { path: 'education', component: EducationComponent },
  { path: 'transportation', component: TransportationComponent },
  { path: 'map', component: MapComponent },
  { path: 'contact', component: KeyContactsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'forum-es', component: ForumDetailInSpanishComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
