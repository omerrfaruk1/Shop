import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, JsonpClientBackend} from '@angular/common/http';
import { Product } from '../product/product';
import {Observable, throwError } from 'rxjs';
import {tap, catchError } from 'rxjs/operators';


@Injectable()
export class ProductsService {

  constructor(private Http:HttpClient) {}

  path = "http://localhost:3000/products";

    getProducts(categoryId:any):Observable<Product[]>{  
      let newPath = this.path;
      if(categoryId){
        newPath += "?categoryId="+categoryId;
      }
      return this.Http.get<Product[]>(newPath).pipe(

        tap(data => {
          console.log(JSON.stringify(data))
        }), 
        catchError(this.handlerError)
      )
    };
    addProduct(product:Product):Observable<Product>{
      const httpOptions = {
        headers : new HttpHeaders({
          "Content-Type" : "application/json",
          "Authorization" : "Token"
        })
      }
      return this.Http.post<Product>(this.path,product,httpOptions).pipe(
        tap(data => {
          console.log(JSON.stringify(data))
        }), 
        catchError(this.handlerError)
      )
    }
    handlerError (err : HttpErrorResponse ){
      let errorMesagge = "";
      if(err.error instanceof ErrorEvent){
        errorMesagge = "Bir hata oluştu" + err.error.message;  
      }else{
        errorMesagge = "bir hata olustu"
      }
      return throwError(errorMesagge); 
    }

}
