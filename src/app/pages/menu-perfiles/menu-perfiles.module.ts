import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPerfilesPageRoutingModule } from './menu-perfiles-routing.module';

import { MenuPerfilesPage } from './menu-perfiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPerfilesPageRoutingModule
  ],
  declarations: [MenuPerfilesPage]
})
export class MenuPerfilesPageModule {}
