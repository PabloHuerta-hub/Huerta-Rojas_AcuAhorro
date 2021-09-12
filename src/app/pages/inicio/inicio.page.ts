import { Component, OnInit } from '@angular/core';
import { ActionSheetPage } from '../action-sheet/action-sheet.page';
interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] =[
    {
      icon: 'bug-outline',
      name:'Action Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon:'sunny-outline',
      name: 'Alert',
      redirectTo:'/alert'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
