import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, delay, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ProductData } from '../models/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient ) { }

  getAllProducts(): Observable<ProductData[]> {
    return this.http.get<ProductData[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {limit: 9}
      })
    }).pipe(
      catchError(this.errorHandler)
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message)
  }
}
