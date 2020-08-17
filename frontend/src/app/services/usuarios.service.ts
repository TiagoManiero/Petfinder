import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Usuarios } from './usuarios.model';
import { Router } from '@angular/router';
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiUrl = "http://localhost:8080/petfriend/usuario";

  private logado: boolean = false;


  constructor(private router: Router,private http: HttpClient) { }

  create(usuario: Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>(`${this.apiUrl}`,usuario);
  }

  read(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.apiUrl);
  }

  readByCodigo(codigo: number){
    const url = `${this.apiUrl}/${codigo}`;
    return this.http.get<Usuarios>(url);
  }

  update(usuario: Usuarios): Observable<Usuarios>{
    const url = `${this.apiUrl}/${usuario.codigo}`;
    return this.http.put<Usuarios>(url, usuario);
  }

  delete(codigo: number): Observable<Usuarios>{
    const url = `${this.apiUrl}/${codigo}`;
    return this.http.delete<Usuarios>(url);
  }


}
