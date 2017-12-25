import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import{AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  user=null;
  isAdminRole:Boolean;
  constructor(private router:Router,private authenticationService:AuthenticationService){
    this.user=JSON.parse(localStorage.getItem('currentUser')); 
    //this.isAdminRole=this.authenticationService.isAdmin(this.user);
    if(this.user){
    if(this.user.user.role==="admin")
    { 
      this.isAdminRole=true;
    }
    if(this.user.user.role=="user")
    {
      this.isAdminRole=false;
    }
    
  }
    
  }
 
  logout() {
     this.authenticationService.logout();
     window.location.reload();
     this.router.navigate(['home']);
 }
}
