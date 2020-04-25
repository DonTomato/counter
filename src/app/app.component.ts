import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

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

  monthsProgress = 0;

  password: string;

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

  generatePassword(): void {
    const a: any[] = [0, 1, 2];
    a.forEach((_, i) => a[i] = Math.random().toString(36).slice(5, 10));
    this.password = `${a[0]}-${a[1]}-${a[2]}`;
    this.copyToClipboard(this.password);
  }

  copyToClipboard(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
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
