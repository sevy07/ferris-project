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

  getSituation(): string {
    let remaining = this.weddingDate.getTime() - new Date().getTime();

    const ceremonyDuration = 9 * 60 * 60 * 1000;
    if (remaining > 0) {
      return 'before';
    } else {
      remaining *= -1;
      if (remaining < ceremonyDuration) {
        return 'during';
      }
      return 'after';
    }
  }

  setCurrentRemainingTime(remaining) {
    this.days = remaining.days;
    this.hours = remaining.hours;
    this.minutes = remaining.minutes;
    this.seconds = remaining.seconds;
  }

  getTimeRemaining() {
    let t = this.weddingDate.getTime() - new Date().getTime();

    if (t < 0) {
      t *= -1;
    }

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
