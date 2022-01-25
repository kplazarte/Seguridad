import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivRepasarEsPageRoutingModule } from './niv-repasar-es-routing.module';

import { NivRepasarEsPage } from './niv-repasar-es.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivRepasarEsPageRoutingModule
  ],
  declarations: [NivRepasarEsPage]
})
export class NivRepasarEsPageModule {}
