import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { Products } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private readonly URL = 'http://localhost:4000/api';

    constructor(
    private store: Store<{}>,
    private http: HttpClient
  ) {
    }
    

    saveClient(product:Products): Observable<any> {
        
        const payload = {
        productName: product.name,
        currentYear: product.curr, previousYear: product.prev
        }
        return this.http.post<Products[]>(this.URL+'/addData', payload);
    }
    getProduct() {
        return this.http.get<Products[]>(this.URL + '/getData');
    }

}