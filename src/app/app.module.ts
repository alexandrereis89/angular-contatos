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
import { ContactBoxComponent } from './features/contact-box/contact-box.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		DetailComponent,
		HeaderComponent,
		SearchComponent,
		ContactListComponent,
		ContactBoxComponent
	],
	imports: [
      BrowserModule,
      FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatButtonModule,
		MatToolbarModule,
		MatListModule,
		MatCardModule,
		MatDialogModule,
		MatInputModule,
		MatFormFieldModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
