import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reprobada } from 'src/app/modulos/seguimiento-academico/reprobada';


@Injectable({
  providedIn: 'root'
})
export class ServicioReprobadaService {
  URL: String = 'http://localhost:3000'
  reprobada:Reprobada[];
  repo: any[];

  constructor(private http:HttpClient) { }

  getReprobadas(): Observable<any[]>{
    return this.http.get<any[]>(`${this.URL}/reprobadas`);
  }
  
  crearReprobada(ma:Reprobada): Observable<any>{
    return this.http.post(`${this.URL}/reprobadas`,ma);
  }

  eliminarReprobada(idreprobada:string):Observable<Reprobada>{
  return this.http.delete<Reprobada>(`${this.URL}/reprobadas/${idreprobada}`)
  }

  buscarPorNombre(nombre: string) {
    return this.http.get(`${this.URL}/reprobadas/${nombre}`);
  }
}
