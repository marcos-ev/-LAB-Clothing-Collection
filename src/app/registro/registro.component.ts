import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Importação do serviço AuthService

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;
  successMessage: string | undefined;
  errorMessage: string | undefined;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.registroForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      company: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    // Adiciona um listener para o evento de envio do formulário
    const form = document.querySelector('.needs-validation') as HTMLFormElement;
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        this.markFormControlsAsTouched(form);
      }
      form.classList.add('was-validated');
    }, false);
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      this.authService.register(this.registroForm.value).subscribe(
        () => {
          // Redireciona o usuário para a página de login e exibe a mensagem de sucesso
          this.router.navigate(['/signin']);
          this.successMessage = 'Registro realizado com sucesso!';
          this.errorMessage = undefined;
        },
        (error) => {
          // Exibe a mensagem de erro
          if (error && error.error && error.error.message === 'Este e-mail já está cadastrado.') {
            this.errorMessage = 'Este e-mail já está cadastrado.';
          } else {
            this.errorMessage = 'Este e-mail já está cadastrado.';
          }
          this.successMessage = undefined;
          console.log(error);
        }
      );
    } else {
      // Exibe mensagem de erro se o formulário não é válido
      this.errorMessage = 'Por favor, preencha todos os campos corretamente.';
      this.successMessage = undefined;
    }
  }

  
  markFormControlsAsTouched(form: HTMLFormElement) {
    // Itera sobre todos os campos do formulário e os marca como tocados
    Array.from(form.querySelectorAll('.required')).forEach(control => {
      if (control instanceof HTMLInputElement) {
        control.classList.add('is-invalid');
        if (!control.validity.valid) {
          const errorElement = control.nextElementSibling as HTMLElement;
          errorElement.textContent = control.validationMessage;
        }
      }
    });
  }
}