import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component'
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { RegistroComponent } from './registro/registro.component';
import { HeaderComponent } from './header/header.component'

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'esqueceu-senha', component: EsqueceuSenhaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'header', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
