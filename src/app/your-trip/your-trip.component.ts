import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-your-trip',
  templateUrl: './your-trip.component.html',
  styleUrls: ['./your-trip.component.scss']
})
export class YourTripComponent implements OnInit, AfterViewInit {

  private fragment: string;

  constructor(private route: ActivatedRoute, public translate: TranslateService) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; this.scrollIntoView(); });
  }

  ngAfterViewInit(): void {
    this.scrollIntoView();
  }

  scrollIntoView() {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
