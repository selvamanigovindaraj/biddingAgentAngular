import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordComponent } from './password/password.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BidsComponent } from './bids/bids.component';
import { BidsopenComponent } from './bidsopen/bidsopen.component';

const appRoutes : Routes = [
{path:'login', component:LoginComponent},
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{path:'signup',component:SignupComponent},
{path:'password',component:PasswordComponent},
{path:'home',component:HomeComponent,
children:[
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bids', component: BidsComponent },
  
  
  { path: 'bopen/:id', component: BidsopenComponent },
  { path: 'bclosed/:id', component: BidsComponent },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
]
},


];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PasswordComponent,
    HomeComponent,
    DashboardComponent,
    BidsComponent,
    BidsopenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
