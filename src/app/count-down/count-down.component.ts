import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy {

  public weddingDate = new Date('25 August 2018 18:00 GMT+0200');

  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;

  public timerSubscription: Subscription;


  constructor() {
    const remaining = this.getTimeRemaining();
    this.setCurrentRemainingTime(remaining);
  }

  ngOnInit() {
    this.timerSubscription = Observable
    .interval(1000)
    .subscribe(() => this.setCurrentRemainingTime(this.getTimeRemaining()));
  }

  setCurrentRemainingTime(remaining) {
    this.days = remaining.days;
    this.hours = remaining.hours;
    this.minutes = remaining.minutes;
    this.seconds = remaining.seconds;
  }

  getTimeRemaining() {
    const t = this.weddingDate.getTime() - new Date().getTime();
    const seconds = Math.floor( (t / 1000) % 60 );
    const minutes = Math.floor( (t / 1000 / 60) % 60 );
    const hours = Math.floor( (t / (1000 * 60 * 60)) % 24 );
    const days = Math.floor( t / (1000 * 60 * 60 * 24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

}
