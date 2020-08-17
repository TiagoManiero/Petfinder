import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from 'src/app/services/usuarios.model';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {
  
  usuario: Usuarios;

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.readByCodigo(1).subscribe((params: any)=>{const codigo = params['codigo']});
  }

}
