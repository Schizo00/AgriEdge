import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWeatherJsonStruct } from './weatherdash';
import { Observable } from 'rxjs';
import { EChartsOption } from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class WeatherdashService {

  constructor(private http:HttpClient) { }

  private url = `https://us-central1-airy-charge-384205.cloudfunctions.net/getWeatherData`
  private headers = new HttpHeaders()
  .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');
  
  getPlantData(): Observable<IWeatherJsonStruct>{
    var data = this.http.get<IWeatherJsonStruct>(this.url, {'headers':this.headers});
    console.log("From Service", data)
    return data
  }
}
