import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductoModalPage } from './add-producto-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddProductoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProductoModalPageRoutingModule {}
