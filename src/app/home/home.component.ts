import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { GaEventsService } from '../ga-events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService, private gaService: GaEventsService) { }

  ngOnInit() {
  }

  selectLanguage(lang: string) {
    this.gaService.emitEvent('translation', 'changed', lang);
    this.translate.use(lang);
  }

}
