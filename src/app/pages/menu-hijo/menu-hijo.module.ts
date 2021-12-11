import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuHijoPageRoutingModule } from './menu-hijo-routing.module';

import { MenuHijoPage } from './menu-hijo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuHijoPageRoutingModule
  ],
  declarations: [MenuHijoPage]
})
export class MenuHijoPageModule {}
