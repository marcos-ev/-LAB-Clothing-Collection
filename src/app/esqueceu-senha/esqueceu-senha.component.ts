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
  emailSent: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.recoveryForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.recoveryForm.valid) {
      // Simula envio de email
      setTimeout(() => {
        this.emailSent = true;
      }, 2000);
    }
  }
}
