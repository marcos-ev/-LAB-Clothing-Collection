import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
