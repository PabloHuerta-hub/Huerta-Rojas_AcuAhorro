import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path: '',
    redirectTo: 'ingreso-app',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
{
 path: 'login',
loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
},
{
  path: 'admin',
  loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
},


{
  path: 'ingreso-app',
  loadChildren: () => import('./pages/ingreso-app/ingreso-app.module').then( m => m.IngresoAppPageModule)
},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
