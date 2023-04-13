import { Component, Input } from '@angular/core';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent {
  
  filePath = 'assets/data/plantlinechart.json'
  @Input() chartOption: EChartsOption = {};
  isUp: boolean = false;



}
