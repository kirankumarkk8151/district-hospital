import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { FooterComponent } from './mycomponents/footer/footer.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { AdminHomeComponent } from './mycomponents/admin-home/admin-home.component';
import { RouterModule,Routes } from '@angular/router';
import { ForgotPasswordComponent } from './mycomponents/forgot-password/forgot-password.component';
import { AngularFireModule } from '@angular/fire/compat';

import { RegisterComponent } from './mycomponents/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AdminHomeComponent,
    ForgotPasswordComponent,
    
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    AngularFireModule.initializeApp(environment.firebase),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
