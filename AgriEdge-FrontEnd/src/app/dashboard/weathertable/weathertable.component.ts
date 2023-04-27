import { Component, Input } from '@angular/core';

export interface dayWeatherData {
  image: string;
  temp: string;
  day: string;
}



@Component({
  selector: 'app-weathertable',
  templateUrl: './weathertable.component.html',
  styleUrls: ['./weathertable.component.css']
})
export class WeathertableComponent {
  
  @Input() weatherData: dayWeatherData[] = [];
  weatherDataLoaded:boolean = this.weatherData.length > 0;
  images = [
    { param: 'cloudy', src: './assets/cloudy.png' },
    { param: 'daycloudy', src: './assets/daycloudy.png' },
    { param: 'rainy', src: './assets/rainy.png' },
    { param: 'sunny', src: './assets/sunny.png' },
  ]

  day1Param: string = "cloudy"
  day2Param: string = "rainy"
  day3Param: string = "sunny"
  day4Param: string = "daycloudy"
  day5Param: string = "rainy"
  day6Param: string = "rainy"
  day7Param: string = "sunny"


  ngOnChanges() {
    this.weatherDataLoaded = this.weatherData.length > 0
  }
  
}
