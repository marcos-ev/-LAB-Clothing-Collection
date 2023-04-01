import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit {
  modelos: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getModelos();
  }

  getModelos(): void {
    this.http.get<any[]>('http://localhost:3000/modelos').subscribe(data => {
      this.modelos = data;
    });
  }

  deleteModelo(id: number): void {
    this.http.delete(`http://localhost:3000/modelos/${id}`).subscribe(() => {
      this.getModelos();
    });
  }

  criarModelo(): void {
    this.router.navigateByUrl('/criar-modelo');
  }
}
