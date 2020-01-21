import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDiarioBordoPageRoutingModule } from './add-diario-bordo-routing.module';

import { AddDiarioBordoPage } from './add-diario-bordo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDiarioBordoPageRoutingModule
  ],
  declarations: [AddDiarioBordoPage]
})
export class AddDiarioBordoPageModule {}
