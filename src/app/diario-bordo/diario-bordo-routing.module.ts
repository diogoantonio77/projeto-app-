import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioBordoPage } from './diario-bordo.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioBordoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioBordoPageRoutingModule {}
