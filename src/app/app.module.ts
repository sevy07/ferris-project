import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { ProposalComponent } from './proposal/proposal.component';
import { WeddingDayComponent } from './wedding-day/wedding-day.component';
import { YourTripComponent } from './your-trip/your-trip.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    HomeComponent,
    IntroComponent,
    OurStoryComponent,
    ProposalComponent,
    WeddingDayComponent,
    YourTripComponent,
    ContactUsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
