import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioNocumplidoService } from 'src/app/services/servicio-seguimientomedico/servicio-nocumplido.service';
import { ServicioTratamientoService } from 'src/app/services/servicio-seguimientomedico/servicio-tratamiento.service';

@Component({
  selector: 'app-tratamiento-nocumplido',
  templateUrl: './tratamiento-nocumplido.component.html',
  styleUrls: ['./tratamiento-nocumplido.component.css']
})
export class TratamientoNocumplidoComponent  implements OnInit{
nocumplidoForm: FormGroup;
tratamientos: any[];
nocumplidos: any[];
 
constructor(private servicioNocumplido:ServicioNocumplidoService,
  private servicioTratamiento:ServicioTratamientoService,
  private formBuilder: FormBuilder
  ){
   this.nocumplidoForm = this.formBuilder.group({
          idTratamiento:['',Validators.compose([Validators.required])],
          observacion:['',Validators.compose([Validators.required])]
   })
  }



  ngOnInit(): void {
    this.getNocumplidos();
    this.getTratamientos();
  }



  crearNocumplido(){
    if(this.nocumplidoForm.valid){
       this.servicioNocumplido.crearNoCumplido(this.nocumplidoForm.value).subscribe(
        res =>{
          console.log(res);
          this.getNocumplidos();
        }
       )
       console.log(this.nocumplidoForm.value);
       alert('Datos validos');
    }else{
      alert('Formulario invalido');
    }
  }

eliminarNocumplido(idnocumplido:Number){
const idstring = idnocumplido.toString();
this.servicioNocumplido.eliminarNoCumplido(idstring).subscribe(
  res=>{
        this.getNocumplidos();
  }
)
}


getNocumplidos(){
  this.servicioNocumplido.getNoCumplidos().subscribe(
    res=>{
     this.nocumplidos = res;
    }
  )
}


getTratamientos(){
  this.servicioTratamiento.getTratamientos().subscribe(
    res =>{
      this.tratamientos = res;
    }
  )
}


}
