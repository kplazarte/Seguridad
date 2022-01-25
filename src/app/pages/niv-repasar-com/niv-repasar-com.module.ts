import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivRepasarComPageRoutingModule } from './niv-repasar-com-routing.module';

import { NivRepasarComPage } from './niv-repasar-com.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivRepasarComPageRoutingModule
  ],
  declarations: [NivRepasarComPage]
})
export class NivRepasarComPageModule {}
