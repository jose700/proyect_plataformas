import { Component, OnInit } from '@angular/core';
import { ServicioCumplidoService } from 'src/app/services/servicio-seguimientomedico/servicio-cumplido.service';
import { ServicioTratamientoService } from 'src/app/services/servicio-seguimientomedico/servicio-tratamiento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-tratamiento-cumplido',
  templateUrl: './tratamiento-cumplido.component.html',
  styleUrls: ['./tratamiento-cumplido.component.css']
})
export class TratamientoCumplidoComponent implements OnInit {
  cedula = '';
  cumplidos: any[];
  tratamientos: any[];
  
  cumplidoForm: FormGroup;

  constructor(private servicioCumplido: ServicioCumplidoService,
    private servicioTratamiento: ServicioTratamientoService,
    private formBuilder:FormBuilder
    ){
      this.cumplidoForm = this.formBuilder.group({
        idTratamiento:['',Validators.compose([Validators.required])],
        observacion:['',Validators.compose([Validators.required])],
        fechainicio:['',Validators.compose([Validators.required])],
        fechafin:['',Validators.compose([Validators.required])]
      })    
    }








ngOnInit(): void {
  this.getCumplidos();
  this.getTratamientos();
}

crearCumplido(){
  if(this.cumplidoForm.valid){
    this.servicioCumplido.crearCumplido(this.cumplidoForm.value).subscribe(
      res => {
            console.log(res);
            this.getCumplidos();
      }
    )
    console.log(this.cumplidoForm.value);
    alert('Datos validos');
  }else{
    alert('Formulario invalido')
  }
}


getCumplidos(){
  this.servicioCumplido.getCumplidos().subscribe(
    res =>{
      this.cumplidos = res;
    }
  )
}


getTratamientos(){
  this.servicioTratamiento.getTratamientos().subscribe(
    res=>{
         this.tratamientos = res;
    }
  )
}

async buscar() {
  try {
    const respuesta = await this.servicioCumplido.buscarPorCedula(this.cedula).toPromise();
    this.cumplidos = respuesta as any[];
    console.log(this.cumplidos);
  } catch (error) {
console.log(this.cumplidos);
  }
}


eliminarCumplido(idcumplido:Number){
const idstring = idcumplido.toString();
this.servicioCumplido.eliminarCumplido(idstring).subscribe(
  res=>{
          this.getCumplidos();
  }
)
}



}
