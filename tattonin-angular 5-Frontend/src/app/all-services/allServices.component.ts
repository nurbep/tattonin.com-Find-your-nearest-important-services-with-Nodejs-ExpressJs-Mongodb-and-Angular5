import { Component } from '@angular/core';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import {AllServices,DeleteteService} from '../services/index';

@Component({
  selector: 'all-services',
  templateUrl: './allServices.component.html',
  styleUrls: ['./allServices.component.css']
})
export class RetrievedAllServices {
  
  constructor(private allServices:AllServices) {
   this.getServices();
  }

  services;
  getServices() {
    this.allServices.getServices().subscribe(res=>{
    this.services=res.json();
    });
    
  }
 
}