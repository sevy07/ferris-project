import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuState: boolean;
  expand: boolean;
  yourTripSelected: boolean;

  constructor(route: ActivatedRoute) {
    this.yourTripSelected = false;
    const url: Observable<string> = route.url.map(segments => segments.join(''));
    url.subscribe((seg) => this.routeChanged(seg));
  }

  ngOnInit() {
    this.menuState = false;
    this.expand = false;
  }

  menuToggle() {
    this.menuState = !this.menuState;
  }

  closeMenu() {
    this.menuState = false;
  }

  toggleSubMenu() {
    this.expand = !this.expand;
  }

  routeChanged(seg: any) {
    this.yourTripSelected = seg === 'your-trip';
  }

}
