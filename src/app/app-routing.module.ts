import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'diario-bordo',
    loadChildren: () => import('./diario-bordo/diario-bordo.module').then( m => m.DiarioBordoPageModule)
  },
  {
    path: 'check-list',
    loadChildren: () => import('./check-list/check-list.module').then( m => m.CheckListPageModule)
  },
  {
    path: 'add-diario-bordo',
    loadChildren: () => import('./add-diario-bordo/add-diario-bordo.module').then( m => m.AddDiarioBordoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
