import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Importação do serviço AuthService

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.registroForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      company: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registroForm.valid) {
      this.authService.register(this.registroForm.value).subscribe(
        () => {
          // Redireciona o usuário para a página de login
          this.router.navigate(['/signin']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
