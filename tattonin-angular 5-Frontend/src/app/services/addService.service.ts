import {Injectable} from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class AddService{
    data;
  constructor(public http:Http){}
  private headers = new Headers({'Content-Type': 'application/json'});
  url="http://localhost:8080/addService";
  insertService(data)
  {
    return this.http.post(this.url,data);

  }
}