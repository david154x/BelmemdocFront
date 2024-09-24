import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoProductosPage } from './catalogo-productos.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogoProductosPage
  },  {
    path: 'producto-detalle-modal',
    loadChildren: () => import('./producto-detalle-modal/producto-detalle-modal.module').then( m => m.ProductoDetalleModalPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoProductosPageRoutingModule {}
