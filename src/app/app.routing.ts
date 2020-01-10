import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { DetailComponent } from "./pages/detail/detail.component";


const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
		pathMatch: "full"
	},
   {
      path: "novo",
      component: DetailComponent
   },
	{
		path: "edit/:contactId",
		component: DetailComponent
	},
	{
		path: "**",
		component: HomeComponent
   },
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
