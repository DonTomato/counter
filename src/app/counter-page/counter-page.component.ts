import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
// import { faCoffee, faCannabis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss']
})
export class CounterPageComponent implements OnInit {
  initial: moment.Moment;

  months: number;
  weaks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  monthsProgress = 0;

  // faCoffe = faCoffee;
  // faCannabis = faCannabis;

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

    this.monthsProgress = this.getPercentage();
  }

  private getPercentage(): number {
    // const startIntervalMoment = this.initial.add(this.months, 'months');
    // const endIntervalMoment = this.initial.add(this.months + 1, 'months');

    // const total = endIntervalMoment.diff(startIntervalMoment, 'seconds');
    // const pass = this.initial.add(this.months, 'months').diff(current, 'seconds');
    // console.log('J', total);
    return this.monthsProgress + 1; // (pass / total) * 100;
  }
}
