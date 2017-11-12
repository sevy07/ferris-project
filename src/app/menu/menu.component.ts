import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {




  menuState: boolean;

  public menuList: any[] = [
    { 'title': 'Home', 'link': '#' },
    { 'title': 'Our story', 'link': '#' },
    { 'title': 'The proposal', 'link': '#' },
    { 'title': 'The big day', 'link': '#' },
    {
      'title': 'Your trip to Santiago', 'link': '#',
      'subItems': [
        { 'title': 'Getting there', 'link': '#' },
        { 'title': 'Where to sleep', 'link': '#' },
        { 'title': 'Where to eat', 'link': '#' },
        { 'title': 'Where to drink', 'link': '#' },
        { 'title': 'A Costa da Morte', 'link': '#' }
      ]
    },
    { 'title': 'Contact us', 'link': '#' }
  ];

  constructor() {

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

  onItemClick(item: any) {
    // alert(item);
  }

  toggleSubMenu(item: any) {
    item.expand = !item.expand;
  }

}
