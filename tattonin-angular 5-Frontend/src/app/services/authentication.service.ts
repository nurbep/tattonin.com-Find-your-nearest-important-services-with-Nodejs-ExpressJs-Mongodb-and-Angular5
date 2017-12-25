import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    loggedIn = false;
    
      isAuthenticated() {
        const promise = new Promise(
          (resolve, reject) => {
            setTimeout(() => {
              resolve(this.loggedIn);
            }, 800);
          }
        );
        return promise;
      }

    login(data) {
        return this.http.post("http://localhost:8080/login",data);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.clear();
    }

    signup(data)
    {
        return this.http.post("http://localhost:8080/register",data);
    }
}