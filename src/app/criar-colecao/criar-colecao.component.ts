import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosService } from '../dados.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-criar-colecao',
  templateUrl: './criar-colecao.component.html',
  styleUrls: ['./criar-colecao.component.css']
})
export class CriarColecaoComponent {
  criarColecaoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dadosService: DadosService) {
    this.criarColecaoForm = this.formBuilder.group({
      nomeColecao: ['', Validators.required],
      responsavel: ['', Validators.required],
      estacao: ['', Validators.required],
      marca: ['', Validators.required],
      orcamento: ['', Validators.required],
      anoLancamento: ['', Validators.required],
    });
  }
  

  onSubmit() {
    this.dadosService.addDado({
      nome: this.criarColecaoForm.value.nomeColecao,
      responsavel: this.criarColecaoForm.value.responsavel,
      estacao: this.criarColecaoForm.value.estacao,
      marca: this.criarColecaoForm.value.marca,
      orcamento: this.criarColecaoForm.value.orcamento,
      anoLancamento: this.criarColecaoForm.value.anoLancamento
    }, 'colecoes');
    this.criarColecaoForm.reset();
  }
}
