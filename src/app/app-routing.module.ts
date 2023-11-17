import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
	},
	{
		path: 'products',
		loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule)
	},
	{
		path: '**',
		redirectTo: 'login'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
