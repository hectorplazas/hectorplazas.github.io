import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Iproductos } from '../productos.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URL:string = 'http://localhost:3000';

  constructor(private readonly httpClient : HttpClient) { }

  getProductos():Observable<Iproductos[]>{
    return this.httpClient.get<Iproductos[]>(`${this.API_URL}/productos`);
  }

  getProductosbyid(productoId:string):Observable<Iproductos>{
    return this.httpClient.get<Iproductos>(`${this.API_URL}/productos/${productoId}`);
  }

  createProductos(productos:Iproductos):Observable<Iproductos>{
    return this.httpClient.post<Iproductos>(`${this.API_URL}/productos/create`, productos);
  }
  
  updateProductos(productoId:string, productos:Iproductos):Observable<Iproductos>{
    return this.httpClient.put<Iproductos>(`${this.API_URL}/productos/update/${productoId}`,productos);
  }

  deleteProductos(productoId:number):Observable<Iproductos>{
    return this.httpClient.delete<Iproductos>(`${this.API_URL}/productos/delete?productoId=${productoId}`);
  }

}
