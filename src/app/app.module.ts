import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; // Importação adicionada

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { RegistroComponent } from './registro/registro.component';
import { HeaderComponent } from './header/header.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabelaDadosComponent } from './tabela-dados/tabela-dados.component';
import { ColecoesComponent } from './colecoes/colecoes.component';
import { ModelosComponent } from './modelos/modelos.component';
import { CriarColecaoComponent } from './criar-colecao/criar-colecao.component';
import { CriarModeloComponent } from './criar-modelo/criar-modelo.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    EsqueceuSenhaComponent,
    RegistroComponent,
    HeaderComponent,
    MenuLateralComponent,
    DashboardComponent,
    TabelaDadosComponent,
    ColecoesComponent,
    ModelosComponent,
    CriarColecaoComponent,
    CriarModeloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule // Adicionado aqui
  ],
  
  providers: [{ provide: 'cache', useValue: false }],
  bootstrap: [AppComponent]
})
export class AppModule { }
