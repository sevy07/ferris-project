import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'es', 'fr']);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(browserLang.match(/en|es|fr/) ? browserLang : 'en');
  }
}
