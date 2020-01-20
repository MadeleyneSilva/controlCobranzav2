import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbonoClientePageRoutingModule } from './abono-cliente-routing.module';

import { AbonoClientePage } from './abono-cliente.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbonoClientePageRoutingModule,
    ComponentsModule
    
  ],
  declarations: [AbonoClientePage]
})
export class AbonoClientePageModule {}
