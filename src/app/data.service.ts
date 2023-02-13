import { Injectable } from '@angular/core';
import{AngularFirestore} from '@angular/fire/compat/firestore'
import { Child } from './model/child';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs:AngularFirestore) { }
  addChild(child:Child){
    child.id=this.afs.createId();
    return this.afs.collection('/Child').add(child);
  }
    // get all students
    getAllChild() {
      return this.afs.collection('/Child').snapshotChanges();
    }
    getChildData(child:Child) {
      return this.afs.collection('Child').doc(child.id).valueChanges();
    }
      //delete student
  deleteChild(child:Child) {
    
    this.afs.doc('/Child/'+child.id).delete();
 }
 // update student
 updateChild(child:Child) {
  this.deleteChild(child);
  this.addChild(child);
}

}