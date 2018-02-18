import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-news-costa',
  templateUrl: './news-costa.component.html',
  styleUrls: ['./news-costa.component.scss']
})
export class NewsCostaComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
