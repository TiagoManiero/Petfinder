import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { CreatePetComponent } from './components/pets/create-pet/create-pet.component';
import { ReadPetComponent } from './components/pets/read-pet/read-pet.component';
import { FiltraPetComponent } from './components/filtra-pet/filtra-pet.component';
import { FiltraCidadeComponent } from './components/pets/filtra-cidade/filtra-cidade.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DadosUsuarioComponent } from './components/dados-usuario/dados-usuario.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cadastrarpet",
    component: CreatePetComponent
  },
  {
    path: "pets",
    component: ReadPetComponent
  },
  {
    path: "meuspets",
    component:  FiltraPetComponent
  },
  {
    path: "cidade",
    component: FiltraCidadeComponent
  },
  {
    path: "cadastro",
    component: CadastroComponent
  },
  {
    path: "dadosUsuario",
    component: DadosUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
