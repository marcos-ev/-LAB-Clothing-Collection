import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Colecao {
  id: number;
  nomeColecao: string;
  responsavel: string;
  modelos: string[];
  orcamento: number;
}

@Component({
  selector: 'app-tabela-dados',
  templateUrl: './tabela-dados.component.html',
  styleUrls: ['./tabela-dados.component.css']
})
export class TabelaDadosComponent implements OnInit {
  colecoes: Colecao[] = [];
  endpoint = 'http://localhost:3000/colecoes';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.buscarDados();
  }

  buscarDados() {
    this.http.get<any>(this.endpoint).subscribe(data => {
      this.colecoes = data;
    });
  }
}
