import { Component } from '@angular/core';

import { GaEventsService } from '../ga-events.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  constructor(private gaService: GaEventsService) { }

  onMailSent() {
    this.gaService.emitEvent('contact-us', 'send-email', 'clicked');
  }

}
