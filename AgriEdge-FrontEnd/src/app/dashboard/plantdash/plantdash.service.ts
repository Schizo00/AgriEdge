import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantdashService {

  constructor(private http:HttpClient) { }

  private url = `https://us-central1-airy-charge-384205.cloudfunctions.net/randomNumber`
  private headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  
  getData(): any {
    return this.http.get(this.url, {'headers':this.headers});
  }
}
