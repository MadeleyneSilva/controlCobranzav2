import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { TablaSaldosComponent } from './tabla-saldos/tabla-saldos.component';



@NgModule({
  declarations: [HeaderComponent,
    MenuComponent, TablaSaldosComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    TablaSaldosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
