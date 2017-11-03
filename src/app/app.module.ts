import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { ProposalComponent } from './proposal/proposal.component';
import { WeddingDayComponent } from './wedding-day/wedding-day.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    HomeComponent,
    IntroComponent,
    OurStoryComponent,
    ProposalComponent,
    WeddingDayComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
