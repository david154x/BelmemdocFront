import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoProductoPage } from './tipo-producto.page';

const routes: Routes = [
  {
    path: '',
    component: TipoProductoPage
  },  {
    path: 'add-tipo-producto-modal',
    loadChildren: () => import('./add-tipo-producto-modal/add-tipo-producto-modal.module').then( m => m.AddTipoProductoModalPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoProductoPageRoutingModule {}
