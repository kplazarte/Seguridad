import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuHijoPage } from './menu-hijo.page';

const routes: Routes = [
  {
    path: '',
    component: MenuHijoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuHijoPageRoutingModule {}
