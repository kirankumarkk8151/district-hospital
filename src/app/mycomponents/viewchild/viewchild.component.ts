import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnDestroy {
childData:any
data:any
  subscription!: Subscription;

constructor(private route:Router){
  
  this.childData=localStorage.getItem('child')
 
 try
  {
    console.log(this.childData)
    this.data=JSON.parse(this.childData)
    console.log(this.data)
  }
  catch(err)
  {route.navigate(['/admin'])
    console.log(err)
  }
}
goBack()
{
  
  this.route.navigate(['/admin'])
}
ngOnDestroy() {
  // Unsubscribe from any subscriptions in the component
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}
}