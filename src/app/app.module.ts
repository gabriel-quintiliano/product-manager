import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductManagerModule } from './modules/product-manager/product-manager.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ProductManagerModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
