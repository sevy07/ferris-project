import { Component, OnInit } from '@angular/core';

import { NgbAccordionConfig, NgbPanelChangeEvent  } from '@ng-bootstrap/ng-bootstrap';

import { GaEventsService } from '../ga-events.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss'],
  providers: [NgbAccordionConfig]
})
export class GiftsComponent implements OnInit {

  constructor(private gaService: GaEventsService) { }

  ngOnInit() {
  }

  notifyPanelChange(event: NgbPanelChangeEvent ) {
    if (event.nextState) {
      this.gaService.emitEvent('bank-account', 'revealed', event.panelId);
    }
  }

}
