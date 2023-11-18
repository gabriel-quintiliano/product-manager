import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductManagerModule } from 'src/app/modules/product-manager/product-manager.module';

import { ProductsViewComponent } from './products-view.component';


@NgModule({
	declarations: [
		ProductsViewComponent
	],
	imports: [
		CommonModule,
		ProductsRoutingModule,
		ProductManagerModule,
	]
})
export class ProductsModule { }
