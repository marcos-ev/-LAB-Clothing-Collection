import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent implements OnInit {
  recoveryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.recoveryForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.recoveryForm.valid) {
      // Adicione aqui a lógica para enviar a solicitação de recuperação de senha
      this.router.navigate(['/signin']);
    }
  }
}
