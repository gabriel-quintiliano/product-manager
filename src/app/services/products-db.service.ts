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
		return this.http.delete(`http://localhost:3000/products/${sku}`);
	}


	// For testing so that I don't need to copy and paste json back and forth in db.json
	resetProductsDb() {

		for (let product of SAMPLE_PRODUCTS) {
			console.log(product)
			this.http.delete(`http://localhost:3000/products/${product.sku}`).subscribe({ error: this.serverDownHandler })
		}

		for (let product of SAMPLE_PRODUCTS) {
			console.log(product)
			this.http.post<Product>(`http://localhost:3000/products`, product).subscribe({ error: this.serverDownHandler })
		}
	}

	// just so that on some cases I don't keep looking for unrelated errors and just realized at once the db went down
	serverDownHandler(error: any) {
		if (error.status === 0) {
			console.error(". . . . . PROVAVELMENTE O JSON-SERVER CAIU . . . . .\nrode o comando 'json-server --watch db.json --id=sku'", error)
		}
	}
}

const SAMPLE_PRODUCTS = [
	{
		"sku": "sku-car-23-mca",
		"name": "Porsche Macan Turbo - 2023",
		"costPrice": 478000,
		"relatedExpenses": 130244,
		"markup": 20,
		"margin": 123444,
		"sellingPrice": 899990
	},
	{
		"sku": "sku-psp-29-3787",
		"name": "PSP 59\" LCD 4K - Smart Connection",
		"costPrice": 4300,
		"relatedExpenses": 400,
		"markup": 1000,
		"margin": 1.89,
		"sellingPrice": 5700
	},
	{
		"sku": "sku-new-2324-mca",
		"name": "Pano de chão - 3 por 2",
		"costPrice": 8,
		"relatedExpenses": 4,
		"markup": 20,
		"margin": 1.6,
		"sellingPrice": 20
	},
	{
		"sku": "sku-tv-29-3787",
		"name": "TV 59\" LCD 4K - Smart Connection",
		"costPrice": 4300,
		"relatedExpenses": 400,
		"markup": 1000,
		"margin": 1.89,
		"sellingPrice": 5700
	},
	{
		"sku": "sku-note-29-3787",
		"name": "NOTE 59\" LCD 4K - Smart Connection",
		"costPrice": 4300,
		"relatedExpenses": 400,
		"markup": 1000,
		"margin": 1.89,
		"sellingPrice": 5700
	},
	{
		"sku": "sku-xbox-29-3787",
		"name": "XBOX 59\" LCD 4K - Smart Connection",
		"costPrice": 4300,
		"relatedExpenses": 400,
		"markup": 1000,
		"margin": 1.89,
		"sellingPrice": 5700
	},
	{
		"sku": "sku-novo-elem-22",
		"name": "apenas um teste",
		"costPrice": 1222,
		"relatedExpenses": 22,
		"markup": 2333,
		"margin": 2343,
		"sellingPrice": 234456
	}
]
