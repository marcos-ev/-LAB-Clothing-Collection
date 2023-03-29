import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.component.html',
  styleUrls: ['./colecoes.component.css']
})
export class ColecoesComponent implements OnInit {
  colecoes: any[] = [];

  constructor(private dadosService: DadosService, private router: Router) { }

  ngOnInit(): void {
    this.getColecoes();
  }

  getColecoes(): void {
    this.dadosService.getDados().subscribe((data: any) => {
      this.colecoes = data.colecoes;
    });
  }

  deleteColecao(id: number): void {
    this.dadosService.deleteDado(id, 'colecoes');
    this.getColecoes();
  }

  criarColecao(): void {
    this.router.navigateByUrl('/criar-colecao');
  }
}
