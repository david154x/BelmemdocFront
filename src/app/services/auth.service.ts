import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = {
      email: email,
      password: password
    };
    return this.http.post(`${environment.apiUrl}/users/login`, loginData);
  }

  register(userCreateDTO: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users`, userCreateDTO);
  }
  
}
