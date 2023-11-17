import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductManagementModule } from 'src/app/modules/product-management/product-management.module';

import { ProductsViewComponent } from './products-view.component';


@NgModule({
	declarations: [
		ProductsViewComponent
	],
	imports: [
		CommonModule,
		ProductsRoutingModule,
		ProductManagementModule,
	]
})
export class ProductsModule { }
