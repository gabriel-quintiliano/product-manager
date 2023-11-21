import { Component, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Product, ProductMetadata } from '../../models/product.model';
import { ProductsDbService } from 'src/app/services/products-db.service';


@Component({
	selector: 'pmg-product-table',
	templateUrl: './product-table.component.html',
	styleUrls: ['./product-table.component.css']
})

export class ProductTableComponent {

	@ViewChild('productsTable') productsTable!: MatTable<Product>;
	productMetadata = ProductMetadata; // declared here so that I can use it in the components template
	displayedColumns = ['select', ...Object.keys(ProductMetadata)];

	products = new MatTableDataSource<Product>();
	selection = new SelectionModel<Product>(true, []);
	indexesSelected: number[] = []

	constructor(private productsDb: ProductsDbService) { }

	ngAfterViewInit() {
		this.productsDb.getProducts().subscribe((res) => {
			console.log("afterViewInit, resposta: ", res);
			this.products.filteredData.push(...res);
			this.productsTable.renderRows();
		})
	}

	/** Whether the number of selected elements matches the total number of rows. */
	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.products.data.length;
		return numSelected === numRows;
	}

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	toggleAllRows() {
		if (this.isAllSelected()) {
			this.selection.clear();
			return;
		}

		this.selection.select(...this.products.data);
	}

	/** The label for the checkbox on the passed row */
	checkboxLabel(row?: Product): string {
		if (!row) {
			return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
		}
		return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ?`;
	}

	addData(data: Product) {
		this.products.filteredData.push(data)
		this.productsTable.renderRows()
	}

	deleteSelected() {

		if (!this.selection.selected) {
			return;
		}

		// this will be used by ProductsDb to know which products to delete
		const selectedProductsSku: string[] = [];

		for (let elem of this.selection.selected) {

			selectedProductsSku.push(elem.sku);

			for (let i = 0; i < this.products.filteredData.length; i++) {
				if (elem === this.products.filteredData[i]) {
					this.products.filteredData.splice(i, 1);
				}
			}
		}

		this.productsDb.deleteProducts(...selectedProductsSku);
		this.selection.clear()
		this.productsTable.renderRows()

	}

	// for testing
	// mostrar() {
	// 	this.addData(new Product('sku-CAR-23-mca', 'Porsche Macan Turbo - 2023', 478000, 130244, 20, 123444, 899990))
	// }
}

const PRODUCTS_SAMPLE: Product[] = [
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
	}
]