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

    this.formulario = new FormGroup ({
      user: new FormControl('', Validators.compose([Validators.required,
                                                    Validators.pattern('[a-z A-Z]'),
                                                    Validators.maxLength(6)])), 
      pass: new FormControl('', Validators.required)
    });

  }

  
  ngOnInit() {


  }


  

  paginaPrincipal(){

   this.router.navigate(['pag-principal']);

  }

  iniciarSesion(){

    console.log(this.formulario.value); 
  }


}
