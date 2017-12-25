import {Injectable} from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class DeleteteService{
    data;
  constructor(public http:Http){}
  private headers = new Headers({'Content-Type': 'application/json'});
  
  delete(id)
  {
    return this.http.delete("http://localhost:8080/singleService/delete/"+id);
  }
}