import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MarcaDTO } from '../home/pages/marca/marca.dto';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {

  constructor(private http: HttpClient) {}

  getMarcas(): Observable<MarcaDTO[]> {
    return this.http.get<MarcaDTO[]>(environment.apiUrl+'/marca');
  }

  addMarca(nombreMarca: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/marca/${nombreMarca}`, {});
  }

  deleteMarca(id: number): Observable<any> {
    return this.http.delete<Boolean>(`${environment.apiUrl}/marca/${id}`);
  }
  
}
