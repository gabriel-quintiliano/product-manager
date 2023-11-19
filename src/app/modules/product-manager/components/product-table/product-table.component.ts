import { Component, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Product, ProductDefaults } from '../../models/product.model';

@Component({
	selector: 'pmg-product-table',
	templateUrl: './product-table.component.html',
	styleUrls: ['./product-table.component.css']
})

export class ProductTableComponent {

	@ViewChild('productsTable') productsTable!: MatTable<Product>;
	productDefaults = ProductDefaults; // declared here so that I can use it in the components template
	displayedColumns = ['select', ...Object.keys(ProductDefaults)];

	products = new MatTableDataSource<Product>(PRODUCTS_SAMPLE);
	selection = new SelectionModel<Product>(true, []);
	indexesSelected: number[] = []

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

		for (let elem of this.selection.selected) {
			for (let i = 0; i < this.products.filteredData.length; i++) {
				if (elem === this.products.filteredData[i]) {
					this.products.filteredData.splice(i, 1);
				}
			}
		}

		this.selection.clear()
		this.productsTable.renderRows()
	}

	// for testing
	// mostrar() {
	// 	this.addData(new Product('sku-CAR-23-mca', 'Porsche Macan Turbo - 2023', 478000, 130244, 20, 123444, 899990))
	// }
}

const PRODUCTS_SAMPLE: Product[] = [ // for testing initially
	new Product('sku-CAR-23-mca', 'Porsche Macan Turbo - 2023', 478000, 130244, 20, 123444, 899990),
	new Product("SKU-TV-29-3787", "TV 59\" LCD 4K - Smart Connection", 4300, 400, 1000, 1.89, 5700),
	new Product("SKU-NOTE-29-3787", "NOTE 59\" LCD 4K - Smart Connection", 4300, 400, 1000, 1.89, 5700),
	new Product("SKU-PSP-29-3787", "PSP 59\" LCD 4K - Smart Connection", 4300, 400, 1000, 1.89, 5700),
	new Product("SKU-XBOX-29-3787", "XBOX 59\" LCD 4K - Smart Connection", 4300, 400, 1000, 1.89, 5700)
]