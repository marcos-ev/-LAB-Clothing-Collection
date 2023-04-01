import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Modelo {
  id: number;
  nomeModelo: string;
  responsavel: string;
  Selecionarcolecao: string;
  possuiBordas: string;
  possuiEstampa: string;
}

@Component({
  selector: 'app-tabela-modelo',
  templateUrl: './tabela-modelo.component.html',
  styleUrls: ['./tabela-modelo.component.css']
})
export class TabelaModeloComponent implements OnInit {
  modelos: Modelo[] = [];
  endpoint = 'http://localhost:3000/modelos';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.buscarDados();
  }

  buscarDados() {
    this.http.get<any>(this.endpoint).subscribe(data =>
       {
      this.modelos = data;
    });
  }
}
