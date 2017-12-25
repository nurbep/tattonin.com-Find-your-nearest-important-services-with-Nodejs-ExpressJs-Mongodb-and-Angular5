import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AuthenticationService } from '../services/index';

@Injectable()
export class UserGuard implements CanActivate {
  user=null;
  constructor(private authService: AuthenticationService, private router: Router) {
    this.user=JSON.parse(localStorage.getItem('currentUser'));
  }
 
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot)
    {
      if(this.user.user.role==="admin")
      {
        
        return true;
       
      }
      this.router.navigate(['home']);
      return false;
     
    }

  
}
