import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {User} from 'src/app/shared/user.class';

import {Subscription} from 'rxjs';

import {FirestoreService} from 'src/app/services/firestore.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  subscriberUserInfo: Subscription;
  user:User=new User();
  constructor(private router:Router, private AuthService:AuthService,public firestoreservice: FirestoreService) {
   }
 
  ngOnInit() {
  }
  async onLogin() {
    try{
    const user = await this.AuthService.login(this.user)
    if(user){
      console.log('succesfully logged in!')
      this.router.navigateByUrl('/inicio')
    }
  }catch(error){
    console.log(error)
  }
}

}
