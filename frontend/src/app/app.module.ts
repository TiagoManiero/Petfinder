import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login/login.component';
import { HttpClientModule } from  '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from  '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './components/menu/menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CreatePetComponent } from './components/pets/create-pet/create-pet.component';
import { ReadPetComponent } from './components/pets/read-pet/read-pet.component';
import { MatTableModule } from '@angular/material/table';
import { FiltraPetComponent } from './components/filtra-pet/filtra-pet.component';
import { FiltraCidadeComponent } from './components/pets/filtra-cidade/filtra-cidade.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DadosUsuarioComponent } from './components/dados-usuario/dados-usuario.component';
import { UsuariosService } from './services/usuarios.service';
import { PetsServiceService } from './services/pets-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    CreatePetComponent,
    ReadPetComponent,
    FiltraPetComponent,
    FiltraCidadeComponent,
    CadastroComponent,
    DadosUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsuariosService,
    PetsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
