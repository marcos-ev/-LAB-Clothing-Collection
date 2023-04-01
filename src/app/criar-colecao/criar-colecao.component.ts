import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosService } from '../dados.service';
import { ColecaoService } from '../colecao.service';

@Component({
  selector: 'app-criar-colecao',
  templateUrl: './criar-colecao.component.html',
  styleUrls: ['./criar-colecao.component.css']
})
export class CriarColecaoComponent implements OnInit {
  criarColecaoForm!: FormGroup;
  formEnviado: boolean = false; // Variável para controlar a exibição da mensagem de sucesso

  constructor(private formBuilder: FormBuilder, private dadosService: DadosService, private colecaoService: ColecaoService, private http: HttpClient) { }

  ngOnInit() {
    this.criarColecaoForm = this.formBuilder.group({
      nomeColecao: ['', Validators.required],
      responsavel: ['', Validators.required],
      estacao: ['', Validators.required],
      marca: ['', Validators.required],
      orcamento: ['', Validators.required],
      anoLancamento: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.criarColecaoForm.value);

    this.http.post('http://localhost:3000/colecoes', this.criarColecaoForm.value).subscribe((dados) => {
      console.log(dados);
      this.formEnviado = true; // Define a variável como verdadeira após o envio do formulário
    });
  }
}
