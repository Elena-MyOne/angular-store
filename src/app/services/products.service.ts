import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, delay, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ProductData } from '../models/interfaces/product.interface';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
    ) { }

  getAllProducts(): Observable<ProductData[]> {
    return this.http.get<ProductData[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {limit: 9}
      })
    }).pipe(
      retry(3),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message)
  }
}
