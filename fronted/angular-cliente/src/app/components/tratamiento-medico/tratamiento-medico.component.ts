import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/modulos/estudiante/estudiante';
import { ServicioEstudianteService } from 'src/app/services/servicio-estudiante/servicio-estudiante.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioTratamientoService } from 'src/app/services/servicio-seguimientomedico/servicio-tratamiento.service';


@Component({
  selector: 'app-tratamiento-medico',
  templateUrl: './tratamiento-medico.component.html',
  styleUrls: ['./tratamiento-medico.component.css']
})
export class TratamientoMedicoComponent implements OnInit {
trataForm: FormGroup;
nombres = '';
tratamientos: any[];
estudiantes: Estudiante[];

  constructor(private formBuilder:FormBuilder,private servicioEstudiante: ServicioEstudianteService,
    private servicioTratamiento:ServicioTratamientoService){
     this.trataForm = this.formBuilder.group({
       idEstudiante:['',Validators.compose([Validators.required])],
       clasediscapacidad:['',Validators.compose([Validators.required, Validators.minLength(4)
        , Validators.maxLength(30)])],
        descripcionconsulta:['', Validators.compose([Validators.required])],
        fechaconsulta:['', Validators.compose([Validators.required])],
        opinionpaciente:['', Validators.compose([Validators.required])],
        tratamientopsicologico:['', Validators.compose([Validators.required])],
        tratamientofisico:['', Validators.compose([Validators.required])],
     })
  }







ngOnInit(): void {
  this.getTratamientos();
  this.getEstudiantes();
}




crearTratamiento(){
if(this.trataForm.valid){
this.servicioTratamiento.crearTratamiento(this.trataForm.value).subscribe(
  res=>{
    console.log(res);
    this.getTratamientos();
  }
)
console.log(this.trataForm.value);
alert('Datos validos')
}else{
  alert('Formulario invalido')
}
}


getTratamientos(){
  this.servicioTratamiento.getTratamientos().subscribe(
    res=>{
      this.tratamientos = res;
    }
  )
}


getEstudiantes(){
  this.servicioEstudiante.getEstudiantes().subscribe(
    res=>{
         this.estudiantes = res;
    }
  )
}


eliminarTratamiento(idtratamiento:Number){
const idstring = idtratamiento.toString();
this.servicioTratamiento.eliminarTratamiento(idstring).subscribe(
  res =>{
    this.getTratamientos();
  }
)
}



async buscar() {
  try {
    const respuesta = await this.servicioTratamiento.buscarPorNombres(this.nombres).toPromise();
    this.tratamientos = respuesta as any[];
    console.log(this.tratamientos);
  } catch (error) {
console.log(this.tratamientos);
  }
}


}
