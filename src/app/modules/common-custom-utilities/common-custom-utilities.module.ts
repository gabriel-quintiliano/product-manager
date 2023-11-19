import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectEntriesPipe } from './pipes/object-entries.pipe';
import { ObjectKeysPipe } from './pipes/object-keys.pipe';
import { ObjectValuesPipe } from './pipes/object-values.pipe';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ZipArraysPipe } from './pipes/zip-arrays.pipe';
import { ZipObjectsPipe } from './pipes/zip-objects.pipe'


@NgModule({
	declarations: [
		ObjectEntriesPipe,
		ObjectKeysPipe,
		ObjectValuesPipe,
		PlaceholderComponent,
		ZipArraysPipe,
		ZipObjectsPipe,
	],
	imports: [
		CommonModule
	],
	exports: [
		ObjectEntriesPipe,
		ObjectKeysPipe,
		ObjectValuesPipe,
		PlaceholderComponent,
		ZipArraysPipe,
		ZipObjectsPipe,
	]
})
export class CommonCustomUtilitiesModule { }
