import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Productos } from 'src/app/interfaces/productoInterfaces';

@Component({
  selector: 'app-tabla-saldos',
  templateUrl: './tabla-saldos.component.html',
  styleUrls: ['./tabla-saldos.component.scss'],
})
export class TablaSaldosComponent implements OnInit {

  productos: Observable<Productos[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.productos = this.dataService.getProductos();

  }

}
