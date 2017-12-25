import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.authenticationService.logout();
    }
    user;
    login(form) {
        this.authenticationService.login(form.value).subscribe(res=>
        {
            localStorage.setItem('currentUser',JSON.stringify(res.json()));
            this.user=res.json();
            form.reset();
            this.router.navigate(['profile']);
            window.location.reload();
        });
            
    }
}