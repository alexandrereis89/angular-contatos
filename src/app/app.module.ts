import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HeaderComponent } from './features/header/header.component';
import { SearchComponent } from './features/search/search.component';
import { ContactListComponent } from './features/contact-list/contact-list.component';
import { ContactFormComponent } from './features/contact-form/contact-form.component';
import { ContactBoxComponent } from './features/contact-box/contact-box.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		DetailComponent,
		HeaderComponent,
		SearchComponent,
		ContactListComponent,
		ContactFormComponent,
		ContactBoxComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatListModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
