import { Component } from '@angular/core';
interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] =[
    {
      icon: 'water-outline',
      name: 'Informacion', 
      redirecTo: '/informacion'
    },
    {
      icon: 'mail-outline', 
      name: 'Registro', 
      redirecTo: '/formulario'
    },
   
  ]
}
