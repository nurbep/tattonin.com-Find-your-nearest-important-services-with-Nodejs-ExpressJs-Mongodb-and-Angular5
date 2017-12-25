import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

import{Router} from "@angular/router";

import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'create-message',
  templateUrl: './createMessage.component.html',
  styleUrls: ['./createMessage.component.css']
})
export class CreateMessage {
  myForm: FormGroup;
  user;
  constructor(private formBuilder: FormBuilder,private messageService:MessageService, private router:Router) {
    this.myForm = formBuilder.group({
        "name":["",Validators.required],
        "email":["",Validators.required],
        "content":["",Validators.required],
    });

    this.user=JSON.parse(localStorage.getItem('currentUser'))|| null;
    
  }

  data;
  createMessage() {
    this.messageService.createMessage(this.myForm.value).subscribe(res=>{
   this.data=res.json();
   this.myForm.clearValidators();
   this.router.navigate(['/createMessage']);
    });
    
  }
 
}