import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-seguimiento-medico',
  templateUrl: './seguimiento-medico.component.html',
  styleUrls: ['./seguimiento-medico.component.css']
})
export class SeguimientoMedicoComponent implements OnInit {

tratamientos = [
  {
    titulo:"Crear tratamiento medico",
    imagen: "https://previews.123rf.com/images/skathi/skathi1606/skathi160600017/58597437-ilustraci%C3%B3n-del-vector-de-la-persona-con-discapacidad-en-silla-de-ruedas-y-los-m%C3%A9dicos-el.jpg",
    url:"/tratamiento-medico"
  },
  {
    
    titulo:"Tratamientos cumplidos",
    imagen: "https://c8.alamy.com/compes/2h7e4x6/doctor-osteopata-quiropractica-tratando-a-la-mujer-que-sufre-de-dolor-de-espalda-tratamiento-del-paciente-rehabilitacion-vector-2h7e4x6.jpg",
    url:"/tratamiento-cumplido"
  },
  {
    
    titulo:"Tratamientos no cumplidos",
    imagen: "https://img.freepik.com/vector-premium/hombre-que-niega-recibir-tratamiento-medico-pastillas-medico-concepto-rechazo-medicamentos-paciente-masculino-dibujos-animados-niega-tomar-drogas_341509-1212.jpg",
    url:"/tratamiento-nocumplido"
  }
]




 constructor(){}
  ngOnInit(): void {
    
  }
}
