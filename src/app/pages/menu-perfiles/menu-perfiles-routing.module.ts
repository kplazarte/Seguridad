import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPerfilesPage } from './menu-perfiles.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPerfilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPerfilesPageRoutingModule {}
