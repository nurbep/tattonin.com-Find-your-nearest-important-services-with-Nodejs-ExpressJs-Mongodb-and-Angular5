import {Injectable} from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class MessageService{
    data;
  constructor(public http:Http){}
  private headers = new Headers({'Content-Type': 'application/json'});
  
  getMessages()
  {
    return this.http.get("http://localhost:8080/messages");
    
  }

  createMessage(data)
  {
      return this.http.post("http://localhost:8080/createMessage",data);
  }
 
  messageDetails(id)
  {
    return this.http.get("http://localhost:8080/messageDetails/"+id);
  }
  
  }