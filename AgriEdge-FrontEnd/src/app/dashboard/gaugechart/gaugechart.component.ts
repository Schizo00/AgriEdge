import { Component, Input } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-gaugechart',
  templateUrl: './gaugechart.component.html',
  styleUrls: ['./gaugechart.component.css']
})
export class GaugechartComponent {

  @Input() chartOption: EChartsOption = {};
  isUp: boolean = false;
}
