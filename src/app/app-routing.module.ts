import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'taksiran',
    loadChildren: () => import('./taksiran/taksiran.module').then( m => m.TaksiranPageModule)
  },
  {
    path: 'kompaun',
    loadChildren: () => import('./kompaun/kompaun.module').then( m => m.KompaunPageModule)
  },
  {
    path: 'dewan',
    loadChildren: () => import('./dewan/dewan.module').then( m => m.DewanPageModule)
  },
  {
    path: 'return',
    loadChildren: () => import('./return/return.module').then( m => m.ReturnPageModule)
  },
  {
    path: 'taksiran-payment',
    loadChildren: () => import('./taksiran-payment/taksiran-payment.module').then( m => m.TaksiranPaymentPageModule)
  },
  {
    path: 'fpx',
    loadChildren: () => import('./fpx/fpx.module').then( m => m.FpxPageModule)
  },
  {
    path: 'return-payment',
    loadChildren: () => import('./return-payment/return-payment.module').then( m => m.ReturnPaymentPageModule)
  },
  {
    path: 'kompaun-payment',
    loadChildren: () => import('./kompaun-payment/kompaun-payment.module').then( m => m.KompaunPaymentPageModule)
  },
  {
    path: 'fpx-kompaun',
    loadChildren: () => import('./fpx-kompaun/fpx-kompaun.module').then( m => m.FpxKompaunPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
