import { Component, OnInit } from '@angular/core';
import { ServicioAprobadaService } from 'src/app/services/servicio-seguimientoacademico/servicio-aprobada.service';
import { ServicioMateriaService } from 'src/app/services/servicio-seguimientoacademico/servicio-materia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-materia-aprobada',
  templateUrl: './materia-aprobada.component.html',
  styleUrls: ['./materia-aprobada.component.css']
})
export class MateriaAprobadaComponent implements OnInit {
aprobadaForm:FormGroup;
nombre = '';
aprobadas: any[];
materias: any[];


  constructor(private servicioAprobada: ServicioAprobadaService,
    private servicioMateria:ServicioMateriaService,
    private formBuilder:FormBuilder
    ){
      this.aprobadaForm = this.formBuilder.group({
        idMateria:['',Validators.compose([Validators.required])],
        observacion:['',Validators.compose([Validators.required, Validators.minLength(5)
          , Validators.maxLength(80)])],
        promediofinal:['',Validators.compose([Validators.required, Validators.min(1)
          , Validators.max(20)])],
      })


  }



  ngOnInit(): void {
  this.getAprobadas();
  this.getMaterias();
}


crearAprobada(){
  if(this.aprobadaForm.valid){
      this.servicioAprobada.crearAprobada(this.aprobadaForm.value).subscribe(
        res=>{
              console.log(res);
              this.getAprobadas();
        }
      )
      console.log(this.aprobadaForm.value);
      alert('Datos validos');
  }else{
    alert('Formulario invalido');
  }
}



getAprobadas(){
  this.servicioAprobada.getAprobadas().subscribe(
    res=>{
         this.aprobadas = res;
    }
  )
}


getMaterias(){
  this.servicioMateria.getMaterias().subscribe(
    res=>{
      this.materias = res;
    }
  )
}


eliminarAprobada(idaprobada:Number){
const idstring = idaprobada.toString();
this.servicioAprobada.eliminarAprobada(idstring).subscribe(
  res=>{
    this.getAprobadas();
  }
)
}


async buscar() {
  try {
    const respuesta = await this.servicioAprobada.buscarPorNombre(this.nombre).toPromise();
    this.aprobadas = respuesta as any[];
    console.log(this.aprobadas);
  } catch (error) {
console.log(this.aprobadas);
  }
}

}
