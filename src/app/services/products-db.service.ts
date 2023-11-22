import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../modules/product-manager/models/product.model';

@Injectable({
	providedIn: 'root'
})
export class ProductsDbService {

	constructor(private http: HttpClient) { }

	getProducts(): Observable<Product[]> {
		return this.http.get<Product[]>('http://localhost:3000/products');
	}

	createProduct(product: Product): Observable<Product> {
		return this.http.post<Product>('http://localhost:3000/products/', product);
	}

	editProduct(sku: string, updatedContent: Product): Observable<Product> {
		return this.http.put<Product>(`http://localhost:3000/products/${sku}`, updatedContent)
	}

	deleteProduct(sku: string): Observable<any> {
		console.log("delete: ", sku)
		return this.http.delete(`http://localhost:3000/products/${sku}`);
	}
}