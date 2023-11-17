import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoutingModule } from './add-routing.module';

import { AddViewComponent } from './add-view.component';



@NgModule({
	declarations: [
		AddViewComponent
	],
	imports: [
		CommonModule,
		AddRoutingModule
	]
})
export class AddModule { }
