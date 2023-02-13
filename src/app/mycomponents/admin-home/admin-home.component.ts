import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router, Routes } from '@angular/router';
import { user } from '@angular/fire/auth';

import{Database,set,ref,update,onValue} from '@angular/fire/database'
import { DataService } from 'src/app/data.service';
import { Child } from 'src/app/model/child';
import{AngularFirestore} from '@angular/fire/compat/firestore'
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  childList:Child[]=[];
  childData:any;
  updateData:any;
  user:any
  userdata:any
  display:any
  isSignedin=false
  constructor(private auth: AuthService, private route:Router,private data:DataService,private afs:AngularFirestore) {  
    this.user=localStorage.getItem('user')
    
  if (this.user==null){
    route.navigate([''])
  }
  this.userdata=JSON.parse(this.user);

  if (this.userdata.providerData[0].displayName==null){
    this.display=this.userdata.email;
  }
  else{
    this.display=this.userdata.displayName
  }

console.log(this.childData)
  }
  ngOnInit(): void {
    this.getAllChild();
  }

  
  logout()
{
  this.auth.logout();
}
register()
{
  this.route.navigate(['/register'])
}
getAllChild() {

  this.data.getAllChild().subscribe(res => {

    this.childList= res.map((e: any) => {
      const data = e.payload.doc.data();
      data.id = e.payload.doc.id;
      return data;
    }).sort((a, b) => {
      return new Date(b.dateOfAdmission).getTime() - new Date(a.dateOfAdmission).getTime();
    });
    

  }, err => {
    alert('Error while fetching student data');
  })
  
}

getChildData(child:Child) {
  this.data.getChildData(child).subscribe(res => {
    console.log(res)
    this.childData = res;
    if(child!=null && child!=undefined){
    localStorage.setItem('child',JSON.stringify(this.childData));
    console.log("child"+this.childData)
    }
    this.route.navigate(['/viewchild'])
  });
  
  

  
 
}  
editChild(child:Child)
{
  
    localStorage.setItem('updatechild',JSON.stringify(child));
    
    this.route.navigate(['/editchild'])

}

deleteChild(child: Child) {
  if (window.confirm('Are you sure you want to delete ' + child.childName + ' ' + child.fatherName + ' ?')) {
    this.data.deleteChild(child);
    this.route.navigate(['/admin'])
  }
}

}



