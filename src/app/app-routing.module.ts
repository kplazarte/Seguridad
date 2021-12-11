import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },  {
    path: 'menu-perfiles',
    loadChildren: () => import('./pages/menu-perfiles/menu-perfiles.module').then( m => m.MenuPerfilesPageModule)
  },
  {
    path: 'menu-hijo',
    loadChildren: () => import('./pages/menu-hijo/menu-hijo.module').then( m => m.MenuHijoPageModule)
  },
  {
    path: 'menu-jugar',
    loadChildren: () => import('./pages/menu-jugar/menu-jugar.module').then( m => m.MenuJugarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
