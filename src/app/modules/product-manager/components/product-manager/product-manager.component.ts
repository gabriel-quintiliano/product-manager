import { Component, ElementRef, SimpleChanges, ViewChild } from '@angular/core';
import { ProductTableComponent } from '../product-table/product-table.component';
import { Action } from '../../models/action.model';

@Component({
	selector: 'pmg-product-manager',
	templateUrl: './product-manager.component.html',
	styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent {
	@ViewChild("table") table!: ProductTableComponent;
	numberOfSelectedItems: number = 0;

	ngAfterViewInit() {
		// Setting to make it possible that every time the number of selected
		// items is needed, this value if fetched live from product-table component.
		Object.defineProperty(this, 'numberOfSelectedItems', {
			get() {
				return this.table.selection.selected.length;
			}
		})
	}

	runAction(action: Action) {
		console.log(`Action to be taken: ${action}Product()`)
		eval(`this.${action}Product()`)
	}

	deleteProduct() {
		this.table.deleteSelected()
	}

	addProduct() {

	}

	editProduct() {

	}
}
