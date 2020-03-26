import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { timer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  initial: moment.Moment;

  months: number;
  weaks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  
  ngOnInit(): void {
    this.initial = moment('2020-03-22 22:45:00.000');
    this.calculate();

    setInterval(_ => this.calculate(), 1000);
  }

  calculate(): void {
    const current = moment();

    this.months = current.diff(this.initial, 'months');
    this.days = current.diff(this.initial, 'days');
    this.hours = current.diff(this.initial, 'hours');
    this.minutes = current.diff(this.initial, 'minutes');
    this.seconds = current.diff(this.initial, 'seconds');
  }
}
