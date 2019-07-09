import { Component, OnInit, HostListener } from '@angular/core';
import { timer, Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  _startDate: Date;
  private _timer: Observable<number>;
  showDetails: boolean = false;

  ngOnInit(): void {
    this._startDate = new Date(2019, 6, 7, 17, 43, 20, 0);
    this._timer = timer(0, 1000);
    this._timer.subscribe(t => {
      const current = new Date();
      
      let sm = moment(this._startDate);
      let cm = moment(Date.now());

      var ms = moment(Date.now()).diff(moment(this._startDate));
      var d = moment.duration(ms);
      
      this.days = Math.trunc(d.asDays());
      this.hours = d.hours();
      this.minutes = d.minutes();
      this.seconds = d.seconds();

      this.tHours = Math.trunc(d.asHours());
      this.tMinutes = Math.trunc(d.asMinutes());
      this.tSeconds = Math.trunc(d.asSeconds());

      this.percentage = (d.asDays() / (365 * 5)) * 100;

      this.percentage = Math.trunc(this.percentage * 1000) / 1000;
    });
  }

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  tHours: number = 0;
  tMinutes: number = 0;
  tSeconds: number = 0;

  percentage: number = 0;

  shortcutPressed(value: any): void {
    if (value.key == "Enter") {
      this.showDetails = !this.showDetails;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    this.showDetails = !this.showDetails;
  }
}