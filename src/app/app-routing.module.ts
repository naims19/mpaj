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
  {
    path: 'dewan-badminton',
    loadChildren: () => import('./dewan-badminton/dewan-badminton.module').then( m => m.DewanBadmintonPageModule)
  },
  {
    path: 'dewan-majlis',
    loadChildren: () => import('./dewan-majlis/dewan-majlis.module').then( m => m.DewanMajlisPageModule)
  },
  {
    path: 'dewan-payment',
    loadChildren: () => import('./dewan-payment/dewan-payment.module').then( m => m.DewanPaymentPageModule)
  },
  {
    path: 'fpx-dewan',
    loadChildren: () => import('./fpx-dewan/fpx-dewan.module').then( m => m.FpxDewanPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'online-shop',
    loadChildren: () => import('./online-shop/online-shop.module').then( m => m.OnlineShopPageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then( m => m.StorePageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'transport',
    loadChildren: () => import('./transport/transport.module').then( m => m.TransportPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'location-bus',
    loadChildren: () => import('./location-bus/location-bus.module').then( m => m.LocationBusPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  },
  {
    path: 'process',
    loadChildren: () => import('./process/process.module').then( m => m.ProcessPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'transaksi',
    loadChildren: () => import('./transaksi/transaksi.module').then( m => m.TransaksiPageModule)
  },
  {
    path: 'bil-mobile',
    loadChildren: () => import('./bil-mobile/bil-mobile.module').then( m => m.BilMobilePageModule)
  },
  {
    path: 'statement-mobile',
    loadChildren: () => import('./statement-mobile/statement-mobile.module').then( m => m.StatementMobilePageModule)
  },
  {
    path: 'bil-web',
    loadChildren: () => import('./bil-web/bil-web.module').then( m => m.BilWebPageModule)
  },
  {
    path: 'statement-web',
    loadChildren: () => import('./statement-web/statement-web.module').then( m => m.StatementWebPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
