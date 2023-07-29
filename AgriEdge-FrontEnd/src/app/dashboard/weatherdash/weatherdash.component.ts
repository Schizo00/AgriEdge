import { Component, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';
import { WeathertableComponent } from '../weathertable/weathertable.component';
import { WeatherdashService } from './weatherdash.service';
import { IWeatherInfoData } from './weatherdash';
// import { dayWeatherData } from '../weathertable/weathertable.component';

@Component({
  selector: 'app-weatherdash',
  templateUrl: './weatherdash.component.html',
  styleUrls: ['./weatherdash.component.css']
})
export class WeatherdashComponent {
  done: any;


  constructor(private service: WeatherdashService) {}



  filePaths: string[] = ['assets/data/weathertable.json', 'assets/data/weatherbarchart.json','assets/data/weathergaugechart.json', 'assets/data/weatherlinechart.json', 'assets/data/weatherbarchart2.json']

  gaugeData: EChartsOption = {};
  barData1: EChartsOption = {};
  barData2: EChartsOption = {};
  lineData: EChartsOption = {};
  weatherInfoData!: IWeatherInfoData[];

  lineIsUp!: boolean;
  barIsUp1!: boolean;
  barIsUp2!: boolean;
  gaugeIsUp!: boolean;

  

  async ngOnInit() {
    

    this.done = await this.service.getPlantData().subscribe(
      (data) => {
        
        this.gaugeData = data.weatherGaugeData as EChartsOption

        this.lineData = data.weatherLineData as EChartsOption
        this.lineIsUp = data.weatherLineData['isUp'] as boolean

        this.barData1 = data.weatherBarData1 as EChartsOption
        this.barIsUp1 = data.weatherBarData1['isUp'] as boolean

        this.barData2 = data.weatherBarData2 as EChartsOption
        this.barIsUp2 = data.weatherBarData2['isUp'] as boolean

        this.lineData = data.weatherLineData as EChartsOption
        this.lineIsUp = data.weatherLineData['isUp'] as boolean

        this.weatherInfoData = data.weatherTableData
        // for (let i = 0; i < data.plantInfoData.length; i++) {
        //   this.plantInfoData.push(data.plantInfoData[i])
        // }
      })



  }

  

}
