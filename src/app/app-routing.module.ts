import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { RegistroComponent } from './registro/registro.component';
import { ColecoesComponent } from './colecoes/colecoes.component';
import { CriarColecaoComponent } from './criar-colecao/criar-colecao.component';
import { ModelosComponent } from './modelos/modelos.component';
import { CriarModeloComponent } from './criar-modelo/criar-modelo.component';
import { EditarColecaoComponent } from './editar-colecao/editar-colecao.component';
import { EditarModeloComponent } from './editar-modelo/editar-modelo.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'esqueceu-senha', component: EsqueceuSenhaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'colecoes', component: ColecoesComponent },
  { path: 'criar-colecao', component: CriarColecaoComponent },
  { path: 'modelos', component: ModelosComponent },
  { path: 'criar-modelo', component: CriarModeloComponent },
  { path: 'editar-colecao', component: EditarColecaoComponent},
  { path: 'editar-modelo', component: EditarModeloComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
