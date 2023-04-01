import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Modelo {
  Selecionarcolecao: string;
  responsavel: string;
  possuiBordas: string;
  possuiEstampa: string;
  nomeModelo: string;
  tipoModelo: string;
  id: number;
}

interface Colecao {
  nomeColecao: string;
  responsavel: string;
  estacao: string;
  marca: string;
  orcamento: number;
  anoLancamento: number;
  id: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalColecoes = 0;
  totalModelos = 0;
  orcamentoMedio = 0;

  constructor(private http: HttpClient) {}

// Db.json esta na pasta raiz entao inserindo o localhost direto

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/db')
      .subscribe(data => {
        this.totalColecoes = data.colecoes.length;
        this.totalModelos = data.modelos.length;

        const orcamentos = data.colecoes.map((c: Colecao) => c.orcamento);
        const somaOrcamentos = orcamentos.reduce((acc: number, val: number) => acc + val, 0);

        // ---- apenas numeros inteiros e sem nada após decimais (topfixed 0), para evitar acumulo de caracteres---


        const orcamentoMedio = (somaOrcamentos / data.colecoes.length).toFixed(0);   
      this.orcamentoMedio = parseFloat(orcamentoMedio);

      });
  }
}
