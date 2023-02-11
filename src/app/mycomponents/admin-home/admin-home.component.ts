import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  user:any
  constructor(private auth: AuthService) {  
    this.user=localStorage.getItem('user');}
  
ngOnOnit()
{
  console.log(this.user)
}
  

logout()
{
  this.auth.logout();
}
}
