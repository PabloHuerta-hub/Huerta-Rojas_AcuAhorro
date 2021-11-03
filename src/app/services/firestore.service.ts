import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import {getAuth} from "firebase/auth"
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore,public auth: AngularFireAuth,public data: AngularFireDatabase) { }
 

  async getUid(){
    const user = await this.auth.currentUser;
    if(user == null){
      return null;
    } else{
      return user.uid;
    }
  }

  stateAuth(){
    return this.auth.authState
  }
  getDoc<tipo>(path: string,id: string){
    const collection = this.db.collection<tipo>(path);
    return collection.doc(id).valueChanges();
  }
}




  
