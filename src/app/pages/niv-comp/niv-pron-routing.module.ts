import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivPronPage } from './niv-pron.page';

const routes: Routes = [
  {
    path: '',
    component: NivPronPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivPronPageRoutingModule {}
