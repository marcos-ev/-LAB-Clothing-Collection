import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  loginFailed: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Dados de login:', this.loginForm.value);
      this.authService.getUsuarios().subscribe((usuarios) => {
        const usuario = usuarios.find((u) => u.email === this.loginForm.value.email && u.password === this.loginForm.value.password);
        if (usuario) {
          // Salva as informações do usuário no localStorage
          localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
          // Redireciona o usuário para a página de dashboard
          this.router.navigate(['/dashboard']);
        } else {
          this.loginFailed = true;
        }
      }, (error) => {
        console.log('Ocorreu um erro ao obter a lista de usuários: ', error);
        this.errorMessage = 'Não foi possível obter a lista de usuários';
      });
    }
  }
}
