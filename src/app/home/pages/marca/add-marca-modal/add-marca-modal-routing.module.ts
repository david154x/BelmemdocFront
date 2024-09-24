import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMarcaModalPage } from './add-marca-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddMarcaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMarcaModalPageRoutingModule {}
