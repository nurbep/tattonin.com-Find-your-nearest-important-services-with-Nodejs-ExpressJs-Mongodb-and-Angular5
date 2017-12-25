import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import {MessageService} from '../services/index';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
    constructor(private messageService:MessageService)
    {
       this.getMessages();
    }


  messages;
  getMessages() {
    this.messageService.getMessages().subscribe(res=>{
   this.messages=res.json();
    });
  }
 }