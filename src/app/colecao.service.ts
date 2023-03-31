import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  constructor(private http: HttpClient) { }

  addColecao(colecao: any) {
    return this.http.post('http://localhost:3000/colecao', colecao);
  }
}
