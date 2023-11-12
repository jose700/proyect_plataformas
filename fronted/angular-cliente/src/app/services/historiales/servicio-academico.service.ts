import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAcademicoService {
  URL: String = 'http://localhost:3000'
  medico: any[];

  constructor(private http:HttpClient) { }

  getAcademicos(): Observable<any[]>{
    return this.http.get<any[]>(`${this.URL}/academicos`);
  }


  getAcademicosCedula(cedula: string) {
    return this.http.get(`${this.URL}/academicos/${cedula}`);
  }
}
