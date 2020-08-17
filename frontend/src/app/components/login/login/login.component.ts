import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuariosService } from './../../../services/usuarios.service';
import { Usuarios } from 'src/app/services/usuarios.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuarios[];  

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  ngOnInit(): void {

  }

  fazerLogin(){
    let responseNome = this.usuariosService.read().subscribe((params: any)=>{const nome = params['nome']}); 
    let responseSenha = this.usuariosService.read().subscribe((params: any)=>{const nome = params['senha']});

  }

  
}
