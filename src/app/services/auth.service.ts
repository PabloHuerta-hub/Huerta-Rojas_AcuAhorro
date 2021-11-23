import { username } from 'src/app/services/model';
import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import {getAuth} from "firebase/auth"
import {User} from 'src/app/shared/user.class';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  public isLogged: any = false;
  constructor(private afaut: AngularFireAuth,private db: AngularFirestore) { 
    afaut.authState.subscribe(user => (this.isLogged =user))
  }
  private path='usuarios/'
  //register
  async register(usuario:User, username:string){
    try{
  return await this.afaut.createUserWithEmailAndPassword(usuario.email,usuario.password).then(res => {
     const uid = res.user.uid;
     this.db.collection('usuarios').doc(uid).set({
      username:username,
      uid:uid
    })

  })
}catch (err) {
  console.log('error para crear usuario',err)
}
  }

  //login 
 async login(usuario:User){
    
  try{
    return await this.afaut.signInWithEmailAndPassword(usuario.email,usuario.password)
  }catch(error){
    console.log('error login',error)
  }
  }   

  }



