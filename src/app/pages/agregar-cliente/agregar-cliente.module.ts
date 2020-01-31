import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarClientePageRoutingModule } from './agregar-cliente-routing.module';

import { AgregarClientePage } from './agregar-cliente.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarClientePageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarClientePage]
})
export class AgregarClientePageModule {}
