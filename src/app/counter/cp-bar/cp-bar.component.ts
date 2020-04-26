import { Component, Input, OnChanges } from '@angular/core';
import { ProgressDataModel } from '../models/progress-data.model';

@Component({
  selector: 'app-cp-bar',
  templateUrl: './cp-bar.component.html',
  styleUrls: ['./cp-bar.component.scss']
})
export class CpBarComponent implements OnChanges {
  @Input()
  scale = 1;

  @Input()
  size = 45;

  @Input()
  strokeSize = 3;

  @Input()
  progressList: ProgressDataModel[];

  list: ProgressCircle[];
  transformValue: string;

  ngOnChanges(): void {
    this.transformValue = `scale(${this.scale})`;

    this.list = this.progressList.map((p, index) => {
      const result = {
        progress: p,
        radius: this.getRadius(index),
        circumference: this.getRadius(index) * 2 * Math.PI
      } as ProgressCircle;

      result.offset = result.circumference - p.percentage / 100 * result.circumference;

      result.strokeDasharray = `${result.circumference} ${result.circumference}`;
      result.strokeDashoffset = `${result.circumference}`;

      return result;
    });
  }

  private getRadius(index: number): number {
    return (this.size - this.strokeSize * 2.5 * index) / 2 - this.strokeSize / 2;
  }
}

interface ProgressCircle {
  progress: ProgressDataModel;
  radius: number;
  circumference: number;
  offset: number;

  strokeDasharray: string;
  strokeDashoffset: string;
}
