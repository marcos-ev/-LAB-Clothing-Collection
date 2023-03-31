import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private apiUrl = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  getDados(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addDado(dado: any, tipo: string) {
    this.getDados().subscribe((data: any) => {
      if (tipo === 'colecao') {
        data.colecoes.push(dado);
      } else if (tipo === 'modelo') {
        data.modelos.push(dado);
      }
      this.http.put(`${this.apiUrl}/${tipo}`, data).subscribe();
    });
  }

  deleteDado(id: number, tipo: string): Observable<any> {
    return this.getDados().pipe(
      switchMap((data: any) => {
        if (tipo === 'colecoes') {
          data.colecoes = data.colecoes.filter((c: any) => c.id !== id);
        } else if (tipo === 'modelos') {
          data.modelos = data.modelos.filter((m: any) => m.id !== id);
        }
        return this.http.put(`${this.apiUrl}/${tipo}`, data);
      })
    );
  } 

  addColecao(colecao: any): Observable<any> {
    return this.getDados().pipe(
      switchMap((data: any) => {
        const novoId = data.colecoes ? data.colecoes.length + 1 : 1;
        colecao.id = novoId;
        if (!data.colecoes) {
          data.colecoes = [];
        }
        data.colecoes.push(colecao);
        return this.http.post(`${this.apiUrl}/colecoes`, colecao);
      })
    );
  }
}
