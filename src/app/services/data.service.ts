import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { Productos } from '../interfaces/productoInterfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getMenuOpts() {

    return this.http.get<Componente[]>('/assets/data/menu.json');

  }

  getProductos(){

    return this.http.get<Productos[]>('assets/data/productos.json');

  }







}
