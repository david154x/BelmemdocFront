import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTipoProductoModalPage } from './add-tipo-producto-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddTipoProductoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTipoProductoModalPageRoutingModule {}
