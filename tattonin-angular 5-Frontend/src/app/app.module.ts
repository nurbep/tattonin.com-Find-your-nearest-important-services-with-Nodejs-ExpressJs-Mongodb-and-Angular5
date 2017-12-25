import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule,FormGroup} from '@angular/forms';
import {Http, HttpModule, RequestOptions} from "@angular/http";

import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';
import {InsertService} from '../app/add-service/addService.component';
import {HeaderComponent} from '../app/header/header.component';
import {HomeComponent} from '../app/home/home.component';
import {RetrievedAllServices} from '../app/all-services/allServices.component';
import {UpdateServiceComponent} from '../app/update-service/updateService.component';
import {CreateMessage,MessagesComponent,MessageDetails} from '../app/message/index';

import {AuthenticationService,DeleteteService,AddService,HomeService,UpdateService,MessageService,SearchNearestByCategory} from './services/index';
import {AllServices} from './services/allServices.service';
import {UserGuard}   from './guards/index';
import{AppRoutingModule} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MessageDetails,
    MessagesComponent,
    CreateMessage,
    InsertService,
    HomeComponent,
    RetrievedAllServices,
    UpdateServiceComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserGuard,AuthenticationService,AddService,HomeService,AllServices,
    UpdateService,MessageService,SearchNearestByCategory,DeleteteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
