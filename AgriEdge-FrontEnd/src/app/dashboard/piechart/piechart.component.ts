import { Component, ElementRef, Input, SimpleChange, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';



// var option;

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})





export class PiechartComponent {
  
  constructor(private elm: ElementRef) {}
  @Input() chartOption: EChartsOption = {};
  isUp!: boolean;

  ngOnInit() {
    console.log("Inside Pie Chart" , this.chartOption)    
  }

  // ngAfterViewInit() {
  //   myChart.setOption(this.chartOption)
  // }

  

}
