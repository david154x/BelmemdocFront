import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'marca',
        loadChildren: () => import('./pages/marca/marca.module').then(m => m.MarcaPageModule)
      },
      {
        path: 'tipo-producto',
        loadChildren: () => import('./pages/tipo-producto/tipo-producto.module').then(m => m.TipoProductoPageModule)
      },
      {
        path: 'producto',
        loadChildren: () => import('./pages/producto/producto.module').then(m => m.ProductoPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
