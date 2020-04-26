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
  size = 60;

  @Input()
  progressList: ProgressDataModel[];

  list: ProgressCircle[];

  transformValue: string;

  readonly WIDTH = 120;
  readonly STROKE_WIDTH = 8;

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
    return (this.WIDTH - this.STROKE_WIDTH * 2.5 * index) / 2 - this.STROKE_WIDTH / 2;
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
