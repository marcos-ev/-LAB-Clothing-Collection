import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private token: string = '';

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.getUsuarios().pipe(
      tap((usuarios) => {
        const emailExists = usuarios.find((usuario) => usuario.email === data.email);
        if (emailExists) {
          throw new Error('Este e-mail já está cadastrado.');
        }
      }),
      switchMap(() => {
        return this.http.post(`${this.apiUrl}/usuarios`, data).pipe(
          tap((response: any) => {
            if (response && response.token) {
              this.setToken(response.token);
            }
          })
        );
      })
    );
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, data).pipe(
      tap((response: any) => {
        if (response && response.token) {
          this.setToken(response.token);
        }
      })
    );
  }

  private setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.token = '';
  }

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuarios`);
  }
}
