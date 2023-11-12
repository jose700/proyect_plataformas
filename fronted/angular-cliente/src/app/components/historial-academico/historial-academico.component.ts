import { Component,OnInit } from '@angular/core';
import { ServicioAcademicoService } from 'src/app/services/historiales/servicio-academico.service';

@Component({
  selector: 'app-historial-academico',
  templateUrl: './historial-academico.component.html',
  styleUrls: ['./historial-academico.component.css']
})
export class HistorialAcademicoComponent implements OnInit {
  cedula = '';
  academicos: any[];


  constructor(private servicioAcademico: ServicioAcademicoService){}
  ngOnInit(): void {
  this.getAcademicos();
}



getAcademicos(){
  this.servicioAcademico.getAcademicos().subscribe(
    res=>{
       this.academicos = res;
    }
  )
}



async buscar() {
  try {
    const respuesta = await this.servicioAcademico.getAcademicosCedula(this.cedula).toPromise();
    this.academicos = respuesta as any[];
    console.log(this.academicos);
  } catch (error) {
console.log(this.academicos);
  }
}


}
