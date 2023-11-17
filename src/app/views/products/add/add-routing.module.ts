import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AddViewComponent } from './add-view.component';

const routes: Routes = [
	{
		path: '',
		component: AddViewComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AddRoutingModule { }
