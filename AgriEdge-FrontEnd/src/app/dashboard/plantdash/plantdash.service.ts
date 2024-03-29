import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlantJsonStruct } from './plantdash';
import { Observable } from 'rxjs';
import { EChartsOption } from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class PlantdashService {

  constructor(private http:HttpClient) { }

  private url = `http://localhost:5000/shining-rush-392311/us-central1/plantData`
  private headers = new HttpHeaders()
  .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');
  
  getPlantData(): Observable<IPlantJsonStruct>{
    var data = this.http.get<IPlantJsonStruct>(this.url, {'headers':this.headers});
    console.log("From Service", data)
    return data
  }

  // getPlantData() {
  //   console.log("Got plant data")
  // }
}
