import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivPronPageRoutingModule } from './niv-pron-routing.module';

import { NivPronPage } from './niv-pron.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivPronPageRoutingModule
  ],
  declarations: [NivPronPage]
})
export class NivPronPageModule {}
