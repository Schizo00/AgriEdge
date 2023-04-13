import { Component, Input } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {

  filePath = 'assets/data/plantpiechart.json'
  @Input() chartOption: EChartsOption = {};
  isUp!: boolean;

}
