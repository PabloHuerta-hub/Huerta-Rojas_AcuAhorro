
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{FirestoreService} from 'src/app/services/firestore.service';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-ingreso-app',
  templateUrl: './ingreso-app.page.html',
  styleUrls: ['./ingreso-app.page.scss'],
})

export class IngresoAppPage implements OnInit {

  
   constructor(private route: ActivatedRoute, private authService:AuthService,private db: AngularFirestore,public firestore: FirestoreService) { }

  ngOnInit() {
  
  }
  
  }