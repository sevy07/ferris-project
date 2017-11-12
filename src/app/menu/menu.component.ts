import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuState: boolean;
  expand: boolean;

  constructor() {

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

}
