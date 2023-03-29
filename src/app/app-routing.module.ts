import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { RegistroComponent } from './registro/registro.component';
import { ColecoesComponent } from './colecoes/colecoes.component';
import { CriarColecaoComponent } from './criar-colecao/criar-colecao.component';


const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'esqueceu-senha', component: EsqueceuSenhaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'colecoes', component: ColecoesComponent },
  { path: 'criar-colecao', component: CriarColecaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
