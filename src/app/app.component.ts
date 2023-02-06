import { Component } from '@angular/core';

import{Database,set,ref,update,onValue} from '@angular/fire/database'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'district_hospital';
  constructor(private db:Database)
  {

  }
  addData(f:any)
  {
    set(ref(this.db, 'users/' + f.value.name), {
      username: f.value.name,
      email: f.value.email,
      password:f.value.password
    });
  }
  readData(f:any)
  {
    const starCountRef = ref(this.db, 'users/' +  f.value.name);
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data.email)
 
});
  }
}
