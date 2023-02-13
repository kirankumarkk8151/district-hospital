import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddchildComponent } from './mycomponents/addchild/addchild.component';
import { AdminHomeComponent } from './mycomponents/admin-home/admin-home.component';
import { EditchildComponent } from './mycomponents/editchild/editchild.component';
import { ForgotPasswordComponent } from './mycomponents/forgot-password/forgot-password.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { RegisterComponent } from './mycomponents/register/register.component';
import { ViewchildComponent } from './mycomponents/viewchild/viewchild.component';

const routes: Routes = [
 
 {path: '', component : HomeComponent},
 {path: 'admin', component : AdminHomeComponent},
 {path: 'forgotpassword', component : ForgotPasswordComponent},
 {path: 'register', component : RegisterComponent},
 {path: 'addchild', component : AddchildComponent},
 {path: 'viewchild', component :ViewchildComponent},
 {path: 'editchild', component:EditchildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
