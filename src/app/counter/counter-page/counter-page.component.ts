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

  monthList: ProgressDataModel[] = [
    { color: '#ff3737', percentage: 95 },
    { color: '#6578fd', percentage: 57 },
    // { color: '#65fda9', percentage: 25 }
  ];
  dayList: ProgressDataModel[] = [];
  hourList: ProgressDataModel[] = [];
  minuteList: ProgressDataModel[] = [];
  secondList: ProgressDataModel[] = [];

  ngOnInit(): void {
    this.initial = moment('2020-03-22 22:45:00.000');
    this.calculate();

    setInterval(_ => this.calculate(), 30);
  }

  calculate(): void {
    const current = this.getCurrentMoment();

    this.months = current.diff(this.initial, 'months');
    this.days = current.diff(this.initial, 'days');
    this.hours = current.diff(this.initial, 'hours');
    this.minutes = current.diff(this.initial, 'minutes');
    this.seconds = current.diff(this.initial, 'seconds');

    this.monthList = this.calculateProgress(this.months, 'months');
    this.dayList = this.calculateProgress(this.days, 'days');
    this.hourList = this.calculateProgress(this.hours, 'hours');
    this.minuteList = this.calculateProgress(this.minutes, 'minutes');
    this.secondList = this.calculateProgress(this.seconds, 'seconds');

    // this.monthsProgress = this.getPercentage();
    // console.log('P', this.monthsProgress);

    // this.monthList[1].percentage = this.monthList[1].percentage + 10;
    // this.monthList[0].percentage = this.monthList[0].percentage + 0;
    // this.monthList = [
    //   ...this.monthList
    // ];
  }

  private getCurrentMoment(): moment.Moment {
    // return moment();
    return moment('2020-04-22 23:47:15.546');
  }

  private calculateProgress(currentCounter: number, unit: moment.unitOfTime.DurationConstructor): ProgressDataModel[] {
    return [
      { color: '#ff3737', percentage: this.getPercentageForZeros(currentCounter, 0, unit) },
      { color: '#65fda9', percentage: this.getPercentageForZeros(currentCounter, 1, unit) },
      { color: '#6578fd', percentage: this.getPercentageForZeros(currentCounter, 2, unit) },
      { color: '#fbff12', percentage: this.getPercentageForNext(currentCounter, unit) }
    ];
  }

  private getPercentageForNext(currentCounter: number, unit: moment.unitOfTime.DurationConstructor): number {
    const startIntervalMoment = moment(this.initial).add(currentCounter, unit);
    const endIntervalMoment = moment(this.initial).add(currentCounter + 1, unit);

    const current = this.getCurrentMoment();

    const total = endIntervalMoment.diff(startIntervalMoment, 'millisecond');
    const pass = current.diff(startIntervalMoment, 'millisecond');
    return (pass / total) * 100;
  }

  private getPercentageForZeros(currentCounter: number, st: number, unit: moment.unitOfTime.DurationConstructor): number {
    if (currentCounter.toString().length - 1 < st) {
      return 0;
    }
    const maxDigit = Number(currentCounter.toString()[st]);

    let next = maxDigit + 1;
    for (const x of Array(currentCounter.toString().length - 1 - st).keys()) {
      next = next * 10;
    }

    let prev = 1;
    if (currentCounter > 1) {
      prev = maxDigit === 0
        ? 9
        : maxDigit;
      const toIter = maxDigit === 0 ? currentCounter.toString().length - 2 - st : currentCounter.toString().length - 1 - st;
      if (toIter > 0) {
        for (const x of Array(toIter).keys()) {
          prev = prev * 10;
        }
      } else {
        return 0;
      }
    }

    const startIntervalMoment = moment(this.initial).add(prev, unit);
    const endIntervalMoment = moment(this.initial).add(next, unit);

    const current = this.getCurrentMoment();

    const total = endIntervalMoment.diff(startIntervalMoment, 'millisecond');
    const pass = current.diff(startIntervalMoment, 'millisecond');
    const result = (pass / total) * 100;
    return result;
  }
}
