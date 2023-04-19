import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';

export interface spreadTable {
  disease: string;
  affectedNoPlants: number;
  severityLevel: string;
  currentSpread: number;
  spreadPredictions: number[];
}


@Component({
  selector: 'app-spreaddash',
  templateUrl: './spreaddash.component.html',
  styleUrls: ['./spreaddash.component.css']
})


export class SpreaddashComponent {

  filePaths: string[] = ['assets/data/spreadinfotable.json', 'assets/data/spreadlinechart.json'];
  tableData: spreadTable[] = []
  lineData: EChartsOption = {}


  @ViewChild('diseaseDrop') diseaseDrop!: ElementRef;
  selectedDisease!: string;

  constructor() {
  }

  ngOnInit() {
    fetch(this.filePaths[0])
    .then((response) => response.json())
    .then((json) => this.tableData = json)
    .then((json) => this.selectedDisease = this.tableData[0].disease)
    .then((json) => this.lineData = this.changeLineData(this.selectedDisease, this.tableData))

  }

  onSelected():void {
		this.selectedDisease = this.diseaseDrop.nativeElement.value;
    this.lineData = this.changeLineData(this.selectedDisease, this.tableData)
    
	}


  changeLineData(selectedDisease: string, data: spreadTable[]): EChartsOption {
    var selectedSeries: number[] = []
    
    for (let i = 0; i < data.length; i++) {
      if (data[i].disease == selectedDisease) {
        selectedSeries = data[i].spreadPredictions;
      }
    }

    var lineInfo: EChartsOption = {
      "xAxis":{
         "data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
         "splitLine":{"show":false}
      },
      "yAxis":{
         "axisLabel":{},
         "splitLine":{}
      },
      "series":[
         {
            "type":"line",
            "data":selectedSeries,
            "itemStyle":{
               "color":"#0099FF"
            },
            "smooth":true
         }
      ],
      "isUp": true
   }

   return lineInfo;
  }

}
