import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCheckListPage } from './add-check-list.page';

const routes: Routes = [
  {
    path: '',
    component: AddCheckListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCheckListPageRoutingModule {}
