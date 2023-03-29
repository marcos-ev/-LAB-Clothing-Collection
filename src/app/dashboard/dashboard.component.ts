import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalColecoes = 0;
  totalModelos = 0;
  orcamentoTotal = 0;
  orcamentoMedio = 0;
  maioresOrcamentos: any[] = [];

  constructor(private http: HttpClient) {
    let colecoes: any[] = [];
    let colecao: any = {};
    this.http.get('db.json').subscribe((data: any) => {
      colecoes = data;
      this.totalColecoes = colecoes.length;

      colecoes.forEach((c: any) => {
        colecao = c;
        this.totalModelos += c.modelos.length;
        this.orcamentoTotal += c.orcamento;
      });

      this.orcamentoMedio = this.orcamentoTotal / this.totalColecoes;

      this.maioresOrcamentos = colecoes.reduce((res: any, colecao: any) => {
        if (colecao.orcamento) {
          res.push(colecao as any);
        }
        return res;
      }, []);

      this.maioresOrcamentos.sort((a, b) => b.orcamento - a.orcamento);
      this.maioresOrcamentos = this.maioresOrcamentos.slice(0, 5);
    });
  }
}
