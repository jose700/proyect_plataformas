import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/modulos/estudiante/estudiante';
import { ServicioEstudianteService } from 'src/app/services/servicio-estudiante/servicio-estudiante.service';
import { ServicioMateriaService } from 'src/app/services/servicio-seguimientoacademico/servicio-materia.service';
import { ServicioNocumplidoService } from 'src/app/services/servicio-seguimientomedico/servicio-nocumplido.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent  implements OnInit {
  cedula = '';
  materiaForm: FormGroup;
  materias: any[];
  estudiantes:Estudiante[];

   
  constructor(private servicioMateria:ServicioMateriaService,
    private formBuilder:FormBuilder,
    private servicioEstudiante:ServicioEstudianteService
    ){
       this.materiaForm = this.formBuilder.group({
        idEstudiante:['',Validators.compose([Validators.required])],
        nombre:['',Validators.compose([Validators.required, Validators.minLength(5)
          , Validators.maxLength(40)])],
        facultad:['',Validators.compose([Validators.required, Validators.minLength(10)
          , Validators.maxLength(40)])],
        carrera:['',Validators.compose([Validators.required, Validators.minLength(10)
          , Validators.maxLength(40)])],
        nivel:['',Validators.compose([Validators.required, Validators.minLength(2)
          , Validators.maxLength(10)])],
        paralelo:['',Validators.compose([Validators.required, Validators.minLength(1)
          , Validators.maxLength(3)])],
        jornada:['',Validators.compose([Validators.required, Validators.minLength(5)
          , Validators.maxLength(20)])]    
       })





    }


  ngOnInit(): void {
  this.getMaterias();
  this.getEstudiantes();
}


crearMateria(){
  if(this.materiaForm.valid){
     this.servicioMateria.crearMateria(this.materiaForm.value).subscribe(
      res=>{
         console.log(res);
         this.getMaterias();
      }
     )
     console.log(this.materiaForm.value);
     alert('Datos validos');
  }else{
    alert('Formulario invalido');
  }
}


getMaterias(){
  this.servicioMateria.getMaterias().subscribe(
    res=>{
      this.materias = res;
    }
  )
}


getEstudiantes(){
  this.servicioEstudiante.getEstudiantes().subscribe(
    res =>{
      this.estudiantes = res;
    }
  )
}


eliminarMateria(idmateria:Number){
const idstring = idmateria.toString();
this.servicioMateria.eliminarMateria(idstring).subscribe(
  res=>{
          this.getMaterias();
  }
)
}





async buscar() {
  try {
    const respuesta = await this.servicioMateria.buscarPorCedula(this.cedula).toPromise();
    this.materias = respuesta as any[];
    console.log(this.materias);
  } catch (error) {
console.log(this.materias);
  }
}


}
