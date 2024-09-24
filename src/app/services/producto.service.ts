import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductoDTO } from '../home/pages/producto/producto.dto';
import { ProductoCreateDTO } from '../home/pages/producto/producto-create.dto';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {}

  getProductos(): Observable<ProductoDTO[]> {
    return this.http.get<ProductoDTO[]>(environment.apiUrl+'/producto');
  }

  addProducto(productoCreateDTO: ProductoCreateDTO): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/producto`, productoCreateDTO, { });
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete<Boolean>(`${environment.apiUrl}/producto/${id}`);
  }

}
