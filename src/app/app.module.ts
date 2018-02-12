import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap/accordion/accordion.module';

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
import { GiftsComponent } from './gifts/gifts.component';
import { NewsComponent } from './news/news.component';
import { NewsFlightComponent } from './news/_subComponents/news-flight/news-flight.component';
import { NewsHoneymoonComponent } from './news/_subComponents/news-honeymoon/news-honeymoon.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    MenuComponent,
    GiftsComponent,
    NewsComponent,
    NewsFlightComponent,
    NewsHoneymoonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbAccordionModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
