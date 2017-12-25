import {Injectable} from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchNearestByCategory{
    data;
  constructor(public http:Http){}
  private headers = new Headers({'Content-Type': 'application/json'});
 
  getNearestServicesByCategory(lat,lon,cat)
  {
      console.log(lat+","+lon+","+cat);
    return this.http.get("http://localhost:8080/nearestServicesByCategory/lat/lon/cat");
  }
  
}