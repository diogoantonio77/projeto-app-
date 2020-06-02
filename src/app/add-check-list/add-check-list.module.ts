import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCheckListPageRoutingModule } from './add-check-list-routing.module';

import { AddCheckListPage } from './add-check-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCheckListPageRoutingModule
  ],
  declarations: [AddCheckListPage]
})
export class AddCheckListPageModule {}
