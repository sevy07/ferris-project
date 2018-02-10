import { Component, OnInit } from '@angular/core';

import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss'],
  providers: [NgbAccordionConfig]
})
export class GiftsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
