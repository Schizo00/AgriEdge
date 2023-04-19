import { Component, Input, OnInit } from '@angular/core';
import type { EChartsOption } from 'echarts';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent {
  // constructor(private http: HttpClient) {}

  @Input() chartOption: EChartsOption = {};
  isUp: boolean = false;
  
  

}
