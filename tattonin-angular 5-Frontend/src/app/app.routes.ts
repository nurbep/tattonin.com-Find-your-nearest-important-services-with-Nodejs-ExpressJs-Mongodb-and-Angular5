import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {InsertService} from './add-service/addService.component';
import {UpdateServiceComponent} from '../app/update-service/updateService.component';
import {RetrievedAllServices} from '../app/all-services/allServices.component';
import {HomeComponent} from './home/home.component';
import {UserGuard}  from './guards/userGuard.guard';
import {CreateMessage,MessagesComponent,MessageDetails} from '../app/message/index';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'profile', component: ProfileComponent },
    {path: 'signup', component: SignupComponent },
    {path: 'header', component: HeaderComponent },
    {path: 'footer', component: FooterComponent },
    {path: 'contact', component: ContactComponent },
    {path: 'addService', canActivate:[UserGuard],component: InsertService },
    { path: 'singleService/:id',canActivate:[UserGuard],  component: UpdateServiceComponent },
    { path: 'addService',  component: InsertService },
    { path: 'home',  component: HomeComponent },
    { path: 'allServices', component: RetrievedAllServices },
    { path: 'createMessage',  component: CreateMessage },
    { path: 'messages', canActivate:[UserGuard], component: MessagesComponent },
    { path: 'messageDetails/:id',canActivate:[UserGuard],  component: MessageDetails },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}