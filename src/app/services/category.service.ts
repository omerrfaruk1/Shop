import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, JsonpClientBackend} from '@angular/common/http';
import { Category } from '../category/category';
import {Observable, throwError } from 'rxjs';
import {tap, catchError } from 'rxjs/operators';


@Injectable()
export class CategoryServices {

  constructor(private Http:HttpClient) {}

  path = "http://localhost:3000/categories";

    getCategories():Observable<Category[]>{  
      return this.Http.get<Category[]>(this.path).pipe(

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
