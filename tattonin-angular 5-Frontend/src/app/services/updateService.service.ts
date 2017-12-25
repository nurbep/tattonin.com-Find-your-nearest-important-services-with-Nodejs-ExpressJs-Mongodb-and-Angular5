import {Injectable} from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class UpdateService{
    data;
  constructor(public http:Http){}
  private headers = new Headers({'Content-Type': 'application/json'});
  
  getSingleService(id)
  {
    
    return this.http.get("http://localhost:8080/singleService/"+id);
    
  }

  updateSingleService(id,data)
  {
      return this.http.post("http://localhost:8080/update/"+id,data);
  }
}