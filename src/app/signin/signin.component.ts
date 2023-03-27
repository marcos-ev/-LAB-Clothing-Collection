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

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Chama o serviço de autenticação e envia as informações de login para o servidor
      this.authService.login(this.loginForm.value).subscribe((response) => {
        console.log('Usuário autenticado com sucesso: ', response);
        // Redireciona o usuário para a página de dashboard
        this.router.navigate(['/dashboard']);
      }, (error) => {
        console.log('Ocorreu um erro ao autenticar o usuário: ', error);
        this.errorMessage = 'E-mail ou senha incorretos';
      });
    }
  }
}
