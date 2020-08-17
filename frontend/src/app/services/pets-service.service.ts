import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pets } from "./pets.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsServiceService {

  apiUrl = "http://localhost:8080/petfriend/pets"
  

  constructor(private http: HttpClient) { }

  create(pet: Pets): Observable<Pets>{
    return this.http.post<Pets>(`${this.apiUrl}`,pet);
  }

  read(): Observable<Pets[]>{
    return this.http.get<Pets[]>(this.apiUrl);
  }

  readByCodigo(codigo: number){
    const url = `${this.apiUrl}/${codigo}`;
    return this.http.get<Pets>(url);
  }

  update(pet: Pets): Observable<Pets>{
    const url = `${this.apiUrl}/${pet.codigo}`;
    return this.http.put<Pets>(url, pet);
  }

  delete(codigo: number): Observable<Pets>{
    const url = `${this.apiUrl}/${codigo}`;
    return this.http.delete<Pets>(url);
  }

  
}
