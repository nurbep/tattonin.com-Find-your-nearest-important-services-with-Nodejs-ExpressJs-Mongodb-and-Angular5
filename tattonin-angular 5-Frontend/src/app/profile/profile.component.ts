import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'profile-p',
    templateUrl: 'profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{
     user;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {}

     ngOnInit(){
        this.user=JSON.parse(localStorage.getItem('currentUser'));  
        }

    logout() {
        this.authenticationService.logout();
        window.location.reload();
        this.router.navigate(['login']);  
    }  
}