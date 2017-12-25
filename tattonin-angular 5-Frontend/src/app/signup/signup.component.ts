import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
    user;
    signup(form) {
        this.authenticationService.signup(form.value).subscribe(res=>
        {
            localStorage.setItem('currentUser',JSON.stringify(res.json()));
            this.user=res.json();
            form.reset();
            this.router.navigate(['profile']);
            window.location.reload();
        });
            
    }
}