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

  dados = [
    {
      nome: 'Modelo 1',
      responsavel: 'Marcos',
      id: 1
    },
    {
      nome: 'Modelo 2',
      responsavel: 'Eduardo',
      id: 2
    }
  ];

  db: {
    modelos: Modelo[],
    colecoes: Colecao[]
  } = {
    modelos: [],
    colecoes: []
  };

  constructor(private http: HttpClient) {
    this.http.get('db.json').subscribe(data => {
      this.db = data as { modelos: Modelo[], colecoes: Colecao[] };
    });
  }

  getModeloColecao(modelo: Modelo): Colecao | undefined {
    return this.db.colecoes.find(c => c.modelos.includes(modelo.id));
  }

  getModeloColecaoNome(modelo: Modelo): string {
    const colecao = this.getModeloColecao(modelo);
    return colecao ? colecao.nome : '';
  }

  getModeloColecaoResponsavel(modelo: Modelo): string {
    const colecao = this.getModeloColecao(modelo);
    return colecao ? colecao.responsavel : '';
  }
}
