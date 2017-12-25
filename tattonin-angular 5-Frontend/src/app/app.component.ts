import { Component,OnInit } from '@angular/core';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser;
  constructor(private authenticationService:AuthenticationService )
  {
    
  }

  ngOnInit()
  {
    this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
  }
}
