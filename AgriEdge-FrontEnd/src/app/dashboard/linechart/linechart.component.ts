import { Component, Input, ViewEncapsulation } from '@angular/core';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LinechartComponent {
  
  @Input() chartOption: EChartsOption = {};
  @Input() style ={
    'position': 'relative',
    'width': '290px',
    'height': '300px',
    'top': '-100px'
}
  isUp: boolean = false;


}



