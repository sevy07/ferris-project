import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menulist: any;
  @Output('open')
  open: EventEmitter<number> = new EventEmitter<number>();
  @Output('close')
  close: EventEmitter<number> = new EventEmitter<number>();
  @Output('onItemSelect')
  onItemSelect: EventEmitter<number> = new EventEmitter<number>();
  private menuState: boolean;
  private targetElement: any;
  private overlayElem: any;

  constructor() {
    this.addOverlayElement();
  }

  ngOnInit() {
    this.menuState = false;
  }

  private menuToggle() {
    this.menuState = !this.menuState;
    this.toggleOverlay();
    if (this.menuState) {
      this.open.emit();
    } else {
      this.close.emit();
    }
  }
  private closeMenu() {
    this.menuState = false;
    this.overlayElem.style['opacity'] = 0;
  }
  private onItemClick(item: any) {
    this.onItemSelect.emit(item);
  }
  private toggleSubMenu(item: any) {
    item.expand = !item.expand;
  }
  private addOverlayElement() {
    this.overlayElem = document.createElement('div');
    this.overlayElem.classList.add('cuppa-menu-overlay');
    this.overlayElem.style['position'] = 'fixed';
    this.overlayElem.style['background'] = 'rgba(0, 0, 0, 0.7)';
    this.overlayElem.style['top'] = 0;
    this.overlayElem.style['left'] = 0;
    this.overlayElem.style['right'] = 0;
    this.overlayElem.style['bottom'] = 0;
    this.overlayElem.style['opacity'] = 0;
    this.overlayElem.style['pointer-events'] = 'none';
    this.overlayElem.style['transition'] = 'all .2s linear';
    document.getElementsByTagName('body')[0].appendChild(this.overlayElem);
  }

  private toggleOverlay() {
    if (this.overlayElem.style['opacity'] === 0) {
      this.overlayElem.style['opacity'] = 1;
    } else if (this.overlayElem.style['opacity'] === 1) {
      this.overlayElem.style['opacity'] = 0;
    }
  }

}
