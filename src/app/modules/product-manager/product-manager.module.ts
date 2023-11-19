import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { CommonCustomUtilitiesModule } from '../common-custom-utilities/common-custom-utilities.module';

import { ProductComponent } from './components/product/product.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductListHeaderComponent } from './components/product-list-header/product-list-header.component';
import { ProductTableActionsBarComponent } from './components/product-table-actions-bar/product-table-actions-bar.component';
import { ProductEditActionsBarComponent } from './components/product-edit-actions-bar/product-edit-actions-bar.component';
import { ProductEditFormComponent } from './components/product-edit-form/product-edit-form.component';
import { ProductManagerComponent } from './components/product-manager/product-manager.component';



@NgModule({
	declarations: [
		ProductComponent,
		ProductTableComponent,
		ProductListHeaderComponent,
		ProductTableActionsBarComponent,
		ProductEditActionsBarComponent,
		ProductEditFormComponent,
		ProductManagerComponent
	],
	imports: [
		CommonModule,
		MatTableModule,
		MatCheckboxModule,
		MatIconModule,
		CommonCustomUtilitiesModule
	],
	exports: [
		ProductComponent,
		ProductTableComponent,
		ProductListHeaderComponent,
		ProductTableActionsBarComponent,
		ProductEditActionsBarComponent,
		ProductEditFormComponent,
		ProductManagerComponent
	]
})
export class ProductManagerModule { }
