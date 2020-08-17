import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(login: Login){
    if(login.nome === "Tiago" && login.senha == "123456"){
      this.logado = true;
      this.router.navigate(["/dadosUsuario"]);
      console.log("passou pelo login");
    }
  }
  
}
