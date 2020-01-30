import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Componente } from 'src/app/interfaces/interfaces';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [];

  public formulario: FormGroup;


  constructor(private router: Router, private formInicioSesion: FormBuilder) { 


  }

  
  ngOnInit() {

    this.formulario = new FormGroup ({
      user: new FormControl('', Validators.compose([Validators.maxLength(12),
                                                    Validators.minLength(6),
                                                    Validators.pattern('[a-zA-Z0-9]*'),
                                                    Validators.required])), 
      pass: new FormControl('', Validators.compose([Validators.minLength(6),        
                                                    Validators.required]))
    });


  }

  validacionCredencial(){

    if(this.formulario.valid){

      this.paginaPrincipal();

    } else {

      console.log("formulario no valido");
    }

  } 

  paginaPrincipal(){

   this.router.navigate(['pag-principal']);

  }

  iniciarSesion(){

    console.log(this.formulario.value); 
  }


}
