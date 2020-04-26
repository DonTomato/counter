import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ProgressDataModel } from '../models/progress-data.model';
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

  list: ProgressDataModel[] = [
    { color: '#ff3737', percentage: 95 },
    { color: '#6578fd', percentage: 57 },
    { color: '#65fda9', percentage: 25 }
  ];

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

    this.list[2].percentage = this.list[2].percentage + 10;
    this.list[1].percentage = this.list[1].percentage + 5;
    this.list = [
      ...this.list
    ];
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
