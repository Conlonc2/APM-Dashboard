import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { StoryStatusComponent } from './charts/story-status/story-status.component';
import { PiBurndownComponent } from './charts/pi-burndown/pi-burndown.component';
import { VelocityComponent } from './charts/velocity/velocity.component';
import { PostSprintDefectsComponent } from './charts/post-sprint-defects/post-sprint-defects.component';
import { TestCaseCreationComponent } from './charts/test-case-creation/test-case-creation.component';
import { TeamAttribsComponent } from './charts/team-attribs/team-attribs.component';
import { CurrentPostSprintDefectsComponent } from './current-post-sprint-defects/current-post-sprint-defects.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    StoryStatusComponent,
    PiBurndownComponent,
    VelocityComponent,
    PostSprintDefectsComponent,
    TestCaseCreationComponent,
    TeamAttribsComponent,
    CurrentPostSprintDefectsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    NgbModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
