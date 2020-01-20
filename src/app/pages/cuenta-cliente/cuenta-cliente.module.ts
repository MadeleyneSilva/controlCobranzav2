import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaClientePageRoutingModule } from './cuenta-cliente-routing.module';

import { CuentaClientePage } from './cuenta-cliente.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaClientePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CuentaClientePage]
})
export class CuentaClientePageModule {}
