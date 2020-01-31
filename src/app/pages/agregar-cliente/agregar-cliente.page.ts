import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.page.html',
  styleUrls: ['./agregar-cliente.page.scss'],
})
export class AgregarClientePage implements OnInit {

  //FormGroup
  public formNuevoCliente: FormGroup;

  //Form Control
  public nombreCliente: FormControl;
  public apellidoCliente: FormControl;
  public direccionCliente: FormControl;
  public institucionCliente: FormControl;
  public fechaPago: FormControl;

  constructor(private toastr: ToastrService) { 

    this.nombreCliente = new FormControl('', Validators.compose([Validators.pattern('[a-zA-Z]*'),
                                                                  Validators.minLength(3),
                                                                  Validators.maxLength(30),
                                                                  Validators.required]));

    this.apellidoCliente = new FormControl('', Validators.compose([Validators.pattern('[a-zA-Z]*'),
                                                                  Validators.minLength(3),
                                                                  Validators.maxLength(30),
                                                                  Validators.required]));      
                                                                  
    this.direccionCliente = new FormControl('', Validators.compose([Validators.pattern('[a-zA-Z0-9]*'),
                                                                  Validators.minLength(6),
                                                                  Validators.maxLength(50),
                                                                  Validators.required])); 
                                                                  
    this.institucionCliente = new FormControl('', Validators.compose([Validators.pattern('[a-zA-Z]*'),
                                                                  Validators.minLength(3),
                                                                  Validators.maxLength(30)]));

    this.fechaPago = new FormControl('', Validators.required);
    
                                                                
  }

  ngOnInit() {

    this.formNuevoCliente = new FormGroup ({

      nombreCliente: this.nombreCliente,
      apellidoCliente: this.apellidoCliente,
      direccionCliente: this.direccionCliente,
      institucionCliente: this.institucionCliente,
      fechaPago: this.fechaPago
      
    });

  }

  agregarCliente(){

    
    if(this.formNuevoCliente.untouched){

        this.toastr.info('Debe completar el formulario', 'ATENCIÓN', {closeButton: true});

    } else if(this.formNuevoCliente.valid){

      if(this.nombreCliente.invalid){

        this.toastr.info('Nombre inválido por favor revise', 'ATENCIÓN', {closeButton: true});

      }

      if(this.apellidoCliente.invalid){

        this.toastr.info('Apellido inválido por favor revise', 'ATENCIÓN', {closeButton: true});

      }

      if(this.direccionCliente.invalid){

        this.toastr.info('Dirección inválida por favor revise', 'ATENCIÓN', {closeButton: true});

      }

      if(this.institucionCliente.invalid){

        this.toastr.info('Institución inválida por favor revise', 'ATENCIÓN', {closeButton: true});

      }

      if(this.fechaPago.invalid){

        this.toastr.info('Debe ingresar una fecha válida', 'ATENCIÓN', {closeButton: true});

      }

      this.toastr.success('Cliente agregado correctamente', 'ATENCIÓN', {closeButton: true});

    }



    


  }

}
