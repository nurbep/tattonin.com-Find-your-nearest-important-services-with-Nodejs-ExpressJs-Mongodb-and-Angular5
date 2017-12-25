import { Component } from '@angular/core';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import {HomeService,SearchNearestByCategory} from '../services/index';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    user;
  constructor(private homeService:HomeService,private searchNearestByCategory:SearchNearestByCategory) {
   this.user=localStorage.getItem("user");
  }
 geolocationPosition;
 latitude;
 longitude;
 services;
 searchServices;


 
  ngOnInit() {
    
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                position => {
                    this.geolocationPosition = position,
                    this.latitude=position.coords.longitude;
                    this.longitude=position.coords.latitude;
                    console.log(this.longitude);
                    this.homeService.getNearestServices(this.latitude,this.longitude).subscribe(res=>{
                      this.services=res.json();
                      console.log(this.services);
                   
                       });
                },
                error => {
                    switch (error.code) {
                        case 1:
                            console.log('Permission Denied');
                            break;
                        case 2:
                            console.log('Position Unavailable');
                            break;
                        case 3:
                            console.log('Timeout');
                            break;
                    }
                }
            );
        };
    } 
    
    getNearestServicesByCategory(category)
    {
        this.searchNearestByCategory.getNearestServicesByCategory(this.latitude,this.longitude,category).subscribe(res=>{
   
           this.services=res.json();
           console.log(res.json());
        });
    }
    
}