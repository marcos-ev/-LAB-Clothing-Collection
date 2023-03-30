import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosService } from '../dados.service';

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
    this.dadosService.addColecao(this.criarColecaoForm.value).subscribe(() => {
      console.log('Dados salvos com sucesso!');
      this.criarColecaoForm.reset();
    }, error => {
      console.log('Erro ao salvar dados:', error);
    });
  }
}
