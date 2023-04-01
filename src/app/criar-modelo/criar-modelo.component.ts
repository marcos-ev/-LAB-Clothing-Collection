import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosService } from '../dados.service';
import { ColecaoService } from '../colecao.service';

@Component({
  selector: 'app-criar-modelo',
  templateUrl: './criar-modelo.component.html',
  styleUrls: ['./criar-modelo.component.css']
})
export class CriarModeloComponent implements OnInit {
  criarModeloForm!: FormGroup;
  opcoesSelecionarColecao: any[] = [];

  constructor(private formBuilder: FormBuilder, private dadosService: DadosService, private colecaoService: ColecaoService, private http: HttpClient) { }

  ngOnInit() {
    // Carrega as coleções existentes no banco de dados
    this.http.get<any[]>('http://localhost:3000/colecoes').subscribe(colecoes => {
      // Cria um array de opções para o campo 'Selecionarcolecao'
      const opcoes = colecoes.map(colecao => ({value: colecao.nomeColecao, label: colecao.nomeColecao}));
      // Atualiza as opções do campo 'Selecionarcolecao' do formulário
      this.criarModeloForm.controls['Selecionarcolecao'].setValidators(Validators.required);
      this.criarModeloForm.controls['Selecionarcolecao'].setValue(opcoes[0].value);
      this.opcoesSelecionarColecao = opcoes;
    });
    // Cria o formulário 'criarModeloForm' com os campos desejados
    this.criarModeloForm = this.formBuilder.group({
      Selecionarcolecao: ['', Validators.required],
      responsavel: ['', Validators.required],
      possuiBordas: ['', Validators.required],
      possuiEstampa: ['', Validators.required],
      nomeModelo: ['', Validators.required]
    });
  }
  

  onSubmit() {
    console.log(this.criarModeloForm.value);
    this.http.post('http://localhost:3000/modelos', this.criarModeloForm.value).subscribe((dados) => {
      console.log(dados);
    });
  }; 
}