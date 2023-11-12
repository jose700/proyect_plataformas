import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Representante } from 'src/app/modulos/representante/representante';

@Injectable({
  providedIn: 'root'
})
export class ServiciorepresentanteService {
  URL: String = 'http://localhost:3000'
  repre:Representante[];
  re: any[];

  constructor(private http:HttpClient) { }

  getRepresentantes(): Observable<any[]>{
    return this.http.get<any[]>(`${this.URL}/representantes`);
  }
  
  crearRepresentante(re:Representante): Observable<any>{
    return this.http.post(`${this.URL}/representantes`,re);
  }

  eliminarRepresentante(idrepresentante:string):Observable<Representante>{
  return this.http.delete<Representante>(`${this.URL}/representantes/${idrepresentante}`)
  }

  buscarPorCedula(cedula: string) {
    return this.http.get(`${this.URL}/representantes/${cedula}`);
  }
  
}
