import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDiarioBordoPage } from './add-diario-bordo.page';

const routes: Routes = [
  {
    path: '',
    component: AddDiarioBordoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDiarioBordoPageRoutingModule {}
