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
import {AddService} from '../services/addService.service';

@Component({
  selector: 'add-service',
  templateUrl: './addService.component.html',
  styleUrls: ['./addService.component.css']
})
export class InsertService {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private addService:AddService) {
    this.myForm = formBuilder.group({
        "name":["",Validators.required],
        "category":["",Validators.required],
        "latitude":[null,Validators.required],
        "longitude":[null,Validators.required],
        "address":["",Validators.required],
        "district":["",Validators.required],
        "mobile":null,
        "telephone":null    
    });  
  }


  data;
  addSingleService() {
    this.addService.insertService(this.myForm.value).subscribe(res=>{
   this.data=res.json();
   this.myForm.reset();
    });
    
  } 
}