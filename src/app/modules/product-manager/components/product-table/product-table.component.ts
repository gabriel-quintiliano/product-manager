import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Product, ProductDefaults } from '../../models/product.model';

@Component({
	selector: 'pmg-product-table',
	templateUrl: './product-table.component.html',
	styleUrls: ['./product-table.component.css']
})

export class ProductTableComponent {
	productDefaults = ProductDefaults; // declared here so that I can use it in the components template
	displayedColumns = ['select', ...Object.keys(ProductDefaults)];

	products: Product[] = [
		new Product("SKU-TV-29-3787", "TV 59\" LCD 4K - Smart Connection", 4300, 400, 1000, 1.89, 5700),
		new Product("SKU-TV-29-3787", "TV 59\" LCD 4K - Smart Connection", 4300, 400, 1000, 1.89, 5700),
		new Product("SKU-TV-29-3787", "TV 59\" LCD 4K - Smart Connection", 4300, 400, 1000, 1.89, 5700),
		new Product("SKU-TV-29-3787", "TV 59\" LCD 4K - Smart Connection", 4300, 400, 1000, 1.89, 5700)
	]

	productsT = new MatTableDataSource<Product>(this.products);

	selection = new SelectionModel<Product>(true, []);

	mostrar(row: any) {
		console.log(row)
	}

	/** Whether the number of selected elements matches the total number of rows. */
	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.productsT.data.length;
		return numSelected === numRows;
	}

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	toggleAllRows() {
		if (this.isAllSelected()) {
			this.selection.clear();
			return;
		}

		this.selection.select(...this.productsT.data);
	}

	/** The label for the checkbox on the passed row */
	checkboxLabel(row?: Product): string {
		if (!row) {
			return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
		}
		return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ?`;
	}
}