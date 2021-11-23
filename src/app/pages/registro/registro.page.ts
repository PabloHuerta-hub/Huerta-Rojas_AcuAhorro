import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {User} from 'src/app/shared/user.class';
import { FirestoreService } from 'src/app/services/firestore.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {


  public username: string;
  user:User=new User();
  constructor( private AuthService: AuthService, private router: Router, private firestore: FirestoreService) { }

  
  ngOnInit() {
  }

  onRegister(){
    try{

   
    this.AuthService.register(this.user,this.username).then(auth=>{
      this.router.navigate(['inicio'])
    })
  }catch(error){
    console.log(error)
  }
}
}