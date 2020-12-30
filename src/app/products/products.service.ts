import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }
  createProduct(productBody:any){
    const productUrl='https://localhost:3000/products';
        return this.httpClient.post(productUrl,productBody)

  }
  viewProduct(productId:any){
    const productUrl='https://localhost:3000/products/'+productId;
        return this.httpClient.get(productUrl)

  }
  updateProduct(productId:any,productBody:any){
    const productUrl='https://localhost:3000/products/'+productId;
        return this.httpClient.put(productUrl,productBody)

  }
  deleteProduct(productId:any){
    const productUrl='https://localhost:3000/products/'+productId;
        return this.httpClient.delete(productUrl)

  }
  searchCategoryProducts(categoryId:any){
    const productUrl='https://localhost:3000/products/category='+categoryId;
        return this.httpClient.get(productUrl)

  }
  searchDateProducts(dateParams:any){
    const productUrl='https://localhost:3000/products/date'+dateParams;
        return this.httpClient.get(productUrl)

  }
}
