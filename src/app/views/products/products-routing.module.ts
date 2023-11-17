import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ProductsViewComponent } from './products-view.component';

const routes: Routes = [
	{
		path: '',
		component: ProductsViewComponent
	},
	{
		path: 'add',
		loadChildren: () => import('./add/add.module').then(m => m.AddModule)
	},
	{
		path: 'edit',
		loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductsRoutingModule { }
