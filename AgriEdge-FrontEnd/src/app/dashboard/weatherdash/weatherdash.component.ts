import { Component, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';
import { WeathertableComponent } from '../weathertable/weathertable.component';
// import { dayWeatherData } from '../weathertable/weathertable.component';

@Component({
  selector: 'app-weatherdash',
  templateUrl: './weatherdash.component.html',
  styleUrls: ['./weatherdash.component.css']
})
export class WeatherdashComponent {
  filePaths: string[] = ['assets/data/weathertable.json', 'assets/data/weatherbarchart.json','assets/data/weathergaugechart.json', 'assets/data/weatherlinechart.json', 'assets/data/weatherbarchart2.json']

  gaugeData: EChartsOption = {};
  barData: EChartsOption = {};
  barData2: EChartsOption = {};
  lineData: EChartsOption = {};
  weatherData: any = [];

  lineIsUp!: boolean;
  barIsUp!: boolean;
  barIsUp2!: boolean;
  gaugeIsUp!: boolean;

  @ViewChild(WeathertableComponent)
  childComp: WeathertableComponent = new WeathertableComponent;
  

  ngOnInit() {
    

    fetch(this.filePaths[0])
    .then((response) => response.json())
    .then((json) => this.weatherData = json)

    fetch(this.filePaths[1])
    .then((response) => response.json())
    .then((json) => this.barData = json)
    .then((json) => this.barIsUp = json.isUp)

    fetch(this.filePaths[2])
    .then((response) => response.json())
    .then((json) => this.gaugeData = json)
    .then((json) => this.gaugeIsUp = json.isUp)

    fetch(this.filePaths[3])
    .then((response) => response.json())
    .then((json) => this.lineData = json)
    .then((json) => this.lineIsUp = json.isUp)

    fetch(this.filePaths[4])
    .then((response) => response.json())
    .then((json) => this.barData2 = json)
    .then((json) => this.barIsUp2 = json.isUp)



  }

  

}
