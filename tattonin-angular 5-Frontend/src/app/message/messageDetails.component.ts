import { Component, Input,Output,OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import{ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {MessageService} from '../services/index';

@Component({
  selector: 'message-details',
  templateUrl: './messageDetails.component.html',
  styleUrls: ['./messageDetails.component.css']

})
export class MessageDetails {
    message;
    sid;
    
  constructor(private activatedRoute:ActivatedRoute,private messageService:MessageService) {
    activatedRoute.params.subscribe((x)=>{this.sid=x['id'];
    this.messageService.messageDetails(this.sid).subscribe(res=>{
        this.message=res.json();
        console.log(this.message);
      });
    });
   }
}
 

