import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './mycomponents/admin-home/admin-home.component';
import { ForgotPasswordComponent } from './mycomponents/forgot-password/forgot-password.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { RegisterComponent } from './mycomponents/register/register.component';

const routes: Routes = [
 
 {path: '', component : HomeComponent},
 {path: 'admin', component : AdminHomeComponent},
 {path: 'forgotpassword', component : ForgotPasswordComponent},
 {path: 'register', component : RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
