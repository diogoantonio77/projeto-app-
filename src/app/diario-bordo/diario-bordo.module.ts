import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioBordoPageRoutingModule } from './diario-bordo-routing.module';

import { DiarioBordoPage } from './diario-bordo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioBordoPageRoutingModule
  ],
  declarations: [DiarioBordoPage]
})
export class DiarioBordoPageModule {}
