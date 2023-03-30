import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosService } from '../dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-modelo',
  templateUrl: './criar-modelo.component.html',
  styleUrls: ['./criar-modelo.component.css']
})
export class CriarModeloComponent {
  criarModeloForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dadosService: DadosService, private router: Router) {
    this.criarModeloForm = this.formBuilder.group({
      nomeModelo: ['', Validators.required],
      tipoModelo: ['', Validators.required],
      selecionarColecao: ['', Validators.required],
      responsavel: ['', Validators.required],
      possuiBordas: ['', Validators.required],
      possuiEstampa: ['', Validators.required]
    });
  }

  onSubmit() {
    this.dadosService.addDado({
      nome: this.criarModeloForm.value.nomeModelo,
      tipo: this.criarModeloForm.value.tipoModelo,
      colecao: this.criarModeloForm.value.selecionarColecao,
      responsavel: this.criarModeloForm.value.responsavel,
      possuiBordas: this.criarModeloForm.value.possuiBordas,
      possuiEstampa: this.criarModeloForm.value.possuiEstampa
    }, 'modelos');
    this.criarModeloForm.reset();
  }

  cancelar() {
    this.router.navigate(['/modelos']);
  }
}
