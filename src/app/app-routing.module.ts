import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakComponent } from './speak/speak.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExperienceComponent } from './experience/experience.component';
import { ForumComponent } from './forum/forum.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'speak', component: SpeakComponent},
  { path: 'forum', component: ForumComponent },
  { path: 'forum/:id', component: ForumDetailComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', component: ProfileViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
