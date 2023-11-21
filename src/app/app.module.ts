import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
		HttpClientModule
	],
	providers: [HttpClient],
	bootstrap: [AppComponent]
})
export class AppModule { }
