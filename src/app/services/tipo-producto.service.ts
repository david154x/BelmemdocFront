import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TipoProductoDTO } from '../home/pages/tipo-producto/tipo-producto.dto';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {

  constructor(private http: HttpClient) {}

  getTiposDeProductos(): Observable<TipoProductoDTO[]> {
    return this.http.get<TipoProductoDTO[]>(environment.apiUrl+'/tipoProducto');
  }

  addTipoDeProducto(nombreTipoProducto: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/tipoProducto/${nombreTipoProducto}`, {});
  }

  deleteTipoProducto(id: number): Observable<any> {
    return this.http.delete<Boolean>(`${environment.apiUrl}/tipoProducto/${id}`);
  }

}
