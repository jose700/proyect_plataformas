import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioMedicoService {
  URL: String = 'http://localhost:3000'
  medico: any[];

  constructor(private http:HttpClient) { }

  getMedicos(): Observable<any[]>{
    return this.http.get<any[]>(`${this.URL}/medicos`);
  }


  getMedicosCedula(cedula: string) {
    return this.http.get(`${this.URL}/medicos/${cedula}`);
  }
}
