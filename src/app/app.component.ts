import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {Subscription} from 'rxjs';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import {FirestoreService} from 'src/app/services/firestore.service'
import {Router} from '@angular/router';
interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}
interface Componente_logout{
  icon: string;
  name: string;

}
interface Usuario{
  username:'',
  uid:''
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  
  uid='';
  username: Usuario={
    username:'',
    uid:''
  }
  subscriberUserInfo: Subscription;
  constructor(public afaut: AngularFireAuth,private router: Router, public authservice: AuthService, public firestoreservice: FirestoreService) {
    this.firestoreservice.stateAuth().subscribe(res => {
      if(res !== null){
        this.uid = res.uid
        this.getUserInfo(this.uid)
      }else{ 
        this.initUser();
      }
    })
  }


  componentes : Componente[] =[
    {
      icon: 'water-outline',
      name: 'Informacion', 
      redirecTo: '/informacion'
    },
   
  ]
  icon:Componente_logout[]=[
    {
      icon: 'log-out-outline',
      name: 'Cerrar sesion', 

    },
  ]

  

  logout(){
    this.afaut.signOut().then((val)=>{
      this.router.navigate(['/ingreso-app'])
    });
  }
 
  initUser() {
    this.uid ='';
    this.username={
      username:'',
      uid:''
    };
  }
  getUserInfo(uid:string){
    const path='usuarios';
    this.subscriberUserInfo= this.firestoreservice.getDoc<Usuario>(path,uid).subscribe(res =>{
       this.username = res ; 
    });
  }
}
