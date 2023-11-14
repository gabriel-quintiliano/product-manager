import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListHeaderComponent } from './components/product-list-header/product-list-header.component';
import { ProductListActionsBarComponent } from './components/product-list-actions-bar/product-list-actions-bar.component';
import { ProductEditActionsBarComponent } from './components/product-edit-actions-bar/product-edit-actions-bar.component';
import { ProductEditFormComponent } from './components/product-edit-form/product-edit-form.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductListHeaderComponent,
    ProductListActionsBarComponent,
    ProductEditActionsBarComponent,
    ProductEditFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    ProductListComponent,
    ProductListHeaderComponent,
    ProductListActionsBarComponent,
    ProductEditActionsBarComponent,
    ProductEditFormComponent
  ]
})
export class ProductManagementModule { }
