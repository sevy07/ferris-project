import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { GaEventsService } from './ga-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private gaService: GaEventsService, translate: TranslateService) {
    translate.addLangs(['en', 'es', 'fr']);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();

    this.gaService.emitEvent('translation', 'default', browserLang);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(browserLang.match(/en|es|fr/) ? browserLang : 'en');

    // Google analytics page views
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
}
