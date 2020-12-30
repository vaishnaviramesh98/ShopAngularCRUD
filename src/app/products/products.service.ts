import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }
  createProduct(productBody:any):Observable<Product>{
    const productUrl='https://localhost:3000/products';
        return this.httpClient.post<Product>(productUrl,productBody)

  }
  viewProduct(productId:any):Observable<Product>{
    const productUrl='https://localhost:3000/products/'+productId;
        return this.httpClient.get<Product>(productUrl)

  }
  updateProduct(productId:any,productBody:any):Observable<Product>{
    const productUrl='https://localhost:3000/products/'+productId;
        return this.httpClient.put<Product>(productUrl,productBody)

  }
  deleteProduct(productId:any):Observable<Product>{
    const productUrl='https://localhost:3000/products/'+productId;
        return this.httpClient.delete<Product>(productUrl)

  }
  searchCategoryProducts(categoryId:any):Observable<Product>{
    const productUrl='https://localhost:3000/products/category='+categoryId;
        return this.httpClient.get<Product>(productUrl)

  }
  searchDateProducts(dateParams:any):Observable<Product>{
    const productUrl='https://localhost:3000/products/date'+dateParams;
        return this.httpClient.get<Product>(productUrl)

  }
}
