import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { EditViewComponent } from './edit-view.component';

const routes: Routes = [
	{
		path: '',
		component: EditViewComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EditRoutingModule { }
