import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuState: boolean;
  expand = {
    'news': false,
    'trip': false
  };
  itemSelected = {
    'news': false,
    'trip': false
  };

  constructor(route: ActivatedRoute) {
    route.url.subscribe((seg) => this.routeChanged(seg));
  }

  ngOnInit() {
    this.menuState = false;
  }

  menuToggle() {
    this.menuState = !this.menuState;
  }

  closeMenu() {
    this.menuState = false;
  }

  toggleSubMenu(item: string) {
    this.expand[item] = !this.expand[item];
  }

  routeChanged(seg: any) {
    this.itemSelected.trip = seg[0].path === 'your-trip';
    this.itemSelected.news = seg[0].path === 'news';
  }

}
