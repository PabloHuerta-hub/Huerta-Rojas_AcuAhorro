import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {NoticiasService} from 'src/app/services/noticias.service';
import {Datum} from '../../interfaces/interfaces';
interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes : Componente[] =[
    {
      icon: 'paw-outline',
      name: 'Action Sheet', 
      redirecTo: '/informacion'
    },
  
   
  ]


  constructor(private menuController: MenuController, private noticiasService: NoticiasService) { }
  noticias: Datum[]=[]
  ngOnInit() {
    this.noticiasService.getTopHeadLines().subscribe(resp=>{
      console.log('noticias',resp);
      this.noticias.push(...resp.data);
    });
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}
  