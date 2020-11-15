import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre: string;
  apellido: string;
  excelencia: boolean;

  constructor(){
    this.nombre = this.nombre
    this.apellido = this.apellido
    this.excelencia = this.excelencia
  }
}


@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {

  alumno: Alumno = new Alumno();
  listadoAlumnos: Array<Alumno> = new Array<Alumno>();

  constructor() { }

  ngOnInit(): void {
  }

agregar(){
  this.listadoAlumnos.push({
    nombre: this.alumno.nombre,
    apellido: this.alumno.apellido,
    excelencia: this.alumno.excelencia
  })

//sirve para que los campos queden vacíos una vez se llenen
  this.alumno.nombre = '';
  this.alumno.apellido = '';
  this.alumno.excelencia = false;

  console.log(this.listadoAlumnos)
}
}
