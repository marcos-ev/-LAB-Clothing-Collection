import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private apiUrl = '/db.json';

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
      this.http.put(this.apiUrl, data).subscribe();
    });
  }

  deleteDado(id: number, tipo: string): Observable<any> {
    return this.getDados().pipe(
      map((data: any) => {
        if (tipo === 'colecoes') {
          data.colecoes = data.colecoes.filter((c: any) => c.id !== id);
        } else if (tipo === 'modelos') {
          data.modelos = data.modelos.filter((m: any) => m.id !== id);
        }
        return data;
      }),
      switchMap((data: any) => this.http.put(this.apiUrl, data))
    );
  } 
  addColecao(colecao: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/colecoes`, colecao);
  }
}

