import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'agregar-cliente',
    loadChildren: () => import('./pages/agregar-cliente/agregar-cliente.module').then( m => m.AgregarClientePageModule)
  },
  {
    path: 'abono-cliente',
    loadChildren: () => import('./pages/abono-cliente/abono-cliente.module').then( m => m.AbonoClientePageModule)
  },
  {
    path: 'cuenta-cliente',
    loadChildren: () => import('./pages/cuenta-cliente/cuenta-cliente.module').then( m => m.CuentaClientePageModule)
  },
  {
    path: 'pag-principal',
    loadChildren: () => import('./pages/pag-principal/pag-principal.module').then( m => m.PagPrincipalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }