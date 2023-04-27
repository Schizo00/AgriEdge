import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { EChartsOption } from 'echarts';
import { PiechartComponent } from '../piechart/piechart.component';
import { PlantdashService } from './plantdash.service';


interface PlantInfo {
  plantID: number;
  xCoord: number;
  yCoord: number;
  diseaseName: string;
  severityLevel: number
}


@Component({
  selector: 'app-plantdash',
  templateUrl: './plantdash.component.html',
  styleUrls: ['./plantdash.component.css']
})
export class PlantdashComponent{

  constructor(private service: PlantdashService) {}
  
  
  filePaths: string[] = ['assets/data/plantinfotable.json', 'assets/data/plantpiechart.json', 'assets/data/plantlinechart.json', 'assets/data/plantbarchart.json', 'assets/data/plantareachart.json']
  tableData!: PlantInfo[];
  pieData: EChartsOption = {};
  lineData: EChartsOption = {};
  barData: EChartsOption = {};
  areaData: EChartsOption = {};

  pieIsUp!: boolean;
  lineIsUp!: boolean;
  barIsUp!: boolean;
  areaIsUp!: boolean;


  
  ngOnInit(): void {
    
    console.log(this.service.getData());

    fetch(this.filePaths[0])
    .then((response) => response.json())
    .then((json) => this.tableData = json)

    fetch(this.filePaths[1])
    .then((response) => response.json())
    .then((json) => this.pieData = json)
    .then((json) => this.pieIsUp = (json.isUp))


    fetch(this.filePaths[2])
    .then((response) => response.json())
    .then((json) => this.lineData = json)
    .then((json) => this.lineIsUp = (json.isUp))

    fetch(this.filePaths[3])
    .then((response) => response.json())
    .then((json) => this.barData = json)
    .then((json) => this.barIsUp = (json.isUp))

    fetch(this.filePaths[4])
    .then((response) => response.json())
    .then((json) => this.areaData = json)
    .then((json) => this.areaIsUp = (json.isUp))
    
    
  }
  
}
