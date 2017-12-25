import { Component, Input,Output,OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  FormsModule 
} from "@angular/forms";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import{ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {Router} from '@angular/router';
import {UpdateService,DeleteteService} from '../services/index';

@Component({
  selector: 'update-service',
  templateUrl: './updateService.component.html',
  styleUrls: ['./updateService.component.css']

})
export class UpdateServiceComponent {
    service;
    sid;
    success;

  constructor(private deleteteService:DeleteteService,private router:Router, private activatedRoute:ActivatedRoute, private updateService:UpdateService,private fb:FormBuilder) {
    activatedRoute.params.subscribe((x)=>{this.sid=x['id'];
    this.updateService.getSingleService(this.sid).subscribe(res=>{
    this.service=res.json();
    });
   }); 
  }

  updateSingleService(data)
  {
    this.updateService.updateSingleService(this.sid,data).subscribe(res=>{
    this.success=res.json();
    });
  }

}
