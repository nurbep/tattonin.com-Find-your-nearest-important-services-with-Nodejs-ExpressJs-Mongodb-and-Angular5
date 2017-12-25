import {Injectable} from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class HomeService{
  constructor(public http:Http){}
  private headers = new Headers({'Content-Type': 'application/json'});
  url="http://localhost:8080/nearestServices";
  getNearestServices(lat,lon)
  {
    return this.http.get("http://localhost:8080/nearestServices/"+lat+"/"+lon);
    
  }
 }