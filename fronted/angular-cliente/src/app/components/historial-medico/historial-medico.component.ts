import { Component , OnInit} from '@angular/core';
import { ServicioMedicoService } from 'src/app/services/historiales/servicio-medico.service';

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.css']
})
export class HistorialMedicoComponent implements OnInit {

 cedula = '';
 medicos: any[];


  constructor(private servicioMedicos: ServicioMedicoService
    ){   
  }








  ngOnInit(): void {
  this.getMedicos();
}


getMedicos(){
  this.servicioMedicos.getMedicos().subscribe(
    res=>{
        this.medicos = res;
    }
  )
}

async buscar() {
  try {
    const respuesta = await this.servicioMedicos.getMedicosCedula(this.cedula).toPromise();
    this.medicos = respuesta as any[];
    console.log(this.medicos);
  } catch (error) {
console.log(this.medicos);
  }
}




}
