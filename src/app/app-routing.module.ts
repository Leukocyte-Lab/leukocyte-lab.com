import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/news/news.module').then((m) => m.NewsModule)
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./pages/product/product.module').then((m) => m.ProductModule)
  }
];

const config: ExtraOptions = {
  useHash: false,
  onSameUrlNavigation: 'reload',
  relativeLinkResolution: 'legacy'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
