import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'menu-jugar',
    loadChildren: () => import('./pages/menu-jugar/menu-jugar.module').then( m => m.MenuJugarPageModule)
  },
  {
    path: 'progreso',
    loadChildren: () => import('./pages/progreso/progreso.module').then( m => m.ProgresoPageModule)
  },
  {
    path: 'lectura',
    loadChildren: () => import('./pages/lectura/lectura.module').then( m => m.LecturaPageModule)
  },
  {
    path: 'modal-popover',
    loadChildren: () => import('./componentes/modal-popover/modal-popover.module').then( m => m.ModalPopoverPageModule)
  },
  {
    path: 'escritura',
    loadChildren: () => import('./pages/escritura/escritura.module').then( m => m.EscrituraPageModule)
  },
  {
    path: 'pronun',
    loadChildren: () => import('./pages/pronun/pronun.module').then( m => m.PronunPageModule)
  },
  {
    path: 'niv-leer',
    loadChildren: () => import('./pages/niv-leer/niv-leer.module').then( m => m.NivLeerPageModule)
  },
  {
    path: 'niv-write',
    loadChildren: () => import('./pages/niv-write/niv-write.module').then( m => m.NivWritePageModule)
  },
  {
    path: 'niv-repasar',
    loadChildren: () => import('./pages/niv-repasar/niv-repasar.module').then( m => m.NivRepasarPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),


  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
