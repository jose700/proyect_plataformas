import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aprobada } from 'src/app/modulos/seguimiento-academico/aprobada';

@Injectable({
  providedIn: 'root'
})
export class ServicioAprobadaService {
  URL: String = 'http://localhost:3000'
  aprobada:Aprobada[];
  apro: any[];

  constructor(private http:HttpClient) { }

  getAprobadas(): Observable<any[]>{
    return this.http.get<any[]>(`${this.URL}/aprobadas`);
  }
  
  crearAprobada(ma:Aprobada): Observable<any>{
    return this.http.post(`${this.URL}/aprobadas`,ma);
  }

  eliminarAprobada(idaprobada:string):Observable<Aprobada>{
  return this.http.delete<Aprobada>(`${this.URL}/aprobadas/${idaprobada}`)
  }

  buscarPorNombre(nombre: string) {
    return this.http.get(`${this.URL}/aprobadas/${nombre}`);
  }
}
