import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioMateriaService } from 'src/app/services/servicio-seguimientoacademico/servicio-materia.service';
import { ServicioReprobadaService } from 'src/app/services/servicio-seguimientoacademico/servicio-reprobada.service';

@Component({
  selector: 'app-materia-reprobada',
  templateUrl: './materia-reprobada.component.html',
  styleUrls: ['./materia-reprobada.component.css']
})
export class MateriaReprobadaComponent implements OnInit {
nombre = '';
reprobadaForm: FormGroup;
reprobadas: any[];
materias: any[];




  constructor(private servicioReprobada: ServicioReprobadaService,
    private servicioMateria: ServicioMateriaService,
    private formBuilder: FormBuilder
    ){
     this.reprobadaForm = this.formBuilder.group({
      idMateria: ['',Validators.compose([Validators.required])],
      motivo: ['',Validators.compose([Validators.required, Validators.minLength(5)
        , Validators.maxLength(65)])]
     })


  }




  ngOnInit(): void {
  this.getReprobadas();
  this.getMaterias();
}


crearReprobada(){
  if(this.reprobadaForm.valid){
   this.servicioReprobada.crearReprobada(this.reprobadaForm.value).subscribe(
    res=>{
       console.log(res);
       this.getReprobadas();
    }
   )
   console.log(this.reprobadaForm.value);
   alert('Datos validos');
  }else{
    alert('Formulario invalido');
  }
}


getReprobadas(){
  this.servicioReprobada.getReprobadas().subscribe(
    res=>{
        this.reprobadas = res;
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


eliminarReprobada(idreprobada:Number){
const idstring = idreprobada.toString();
this.servicioReprobada.eliminarReprobada(idstring).subscribe(
  res=>{
       this.getReprobadas();
  }
)
}

async buscar() {
  try {
    const respuesta = await this.servicioReprobada.buscarPorNombre(this.nombre).toPromise();
    this.reprobadas = respuesta as any[];
    console.log(this.reprobadas);
  } catch (error) {
console.log(this.reprobadas);
  }
}



}
