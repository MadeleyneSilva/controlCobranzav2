import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbonoClientePage } from './abono-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: AbonoClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbonoClientePageRoutingModule {}
