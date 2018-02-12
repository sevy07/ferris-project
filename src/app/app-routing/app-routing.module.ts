import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { OurStoryComponent } from '../our-story/our-story.component';
import { ProposalComponent } from '../proposal/proposal.component';
import { WeddingDayComponent } from '../wedding-day/wedding-day.component';
import { YourTripComponent } from '../your-trip/your-trip.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { GiftsComponent } from '../gifts/gifts.component';
import { NewsComponent } from '../news/news.component';
import { NewsFlightComponent } from '../news/_subComponents/news-flight/news-flight.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'news', component: NewsComponent },
  { path: 'proposal', component: ProposalComponent },
  { path: 'wedding-day', component: WeddingDayComponent },
  { path: 'your-trip', component: YourTripComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'news/flights-and-accommodation', component: NewsFlightComponent },
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
