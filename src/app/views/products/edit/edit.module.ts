import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoutingModule } from './edit-routing.module';

import { EditViewComponent } from './edit-view.component';



@NgModule({
	declarations: [
		EditViewComponent
	],
	imports: [
		CommonModule,
		EditRoutingModule
	]
})
export class EditModule { }
