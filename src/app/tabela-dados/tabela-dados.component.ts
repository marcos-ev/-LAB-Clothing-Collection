import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Modelo {
  id: number;
  nome: string;
}

interface Colecao {
  id: number;
  nome: string;
  responsavel: string;
  modelos: number[];
  orcamento: number;
}

@Component({
  selector: 'app-tabela-dados',
  templateUrl: './tabela-dados.component.html',
  styleUrls: ['./tabela-dados.component.css']
})
export class TabelaDadosComponent {
  colecoes: Colecao[] = [];

  constructor(private http: HttpClient) {
    this.getColecoes();
  }

  getColecoes() {
    this.http.get<any>('http://localhost:3000/colecoes').subscribe(data => {
      this.colecoes = data.colecoes;
    });
  }
}
