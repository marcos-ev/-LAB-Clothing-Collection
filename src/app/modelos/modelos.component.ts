import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit {
  modelos: any[] = [];

  constructor(private dadosService: DadosService, private router: Router) { }

  ngOnInit(): void {
    this.getModelos();
  }

  getModelos(): void {
    this.dadosService.getDados().subscribe((data: any) => {
      this.modelos = data.modelos;
    });
  }

  deleteModelo(id: number): void {
    this.dadosService.deleteDado(id, 'modelos');
    this.getModelos();
  }

  criarModelo(): void {
    this.router.navigateByUrl('/criar-modelo');
  }
}
