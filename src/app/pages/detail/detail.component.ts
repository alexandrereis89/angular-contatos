import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Contact } from 'src/app/model/Contact';
@Component({
	selector: "app-detail",
	templateUrl: "./detail.component.html",
	styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
	contacId: Number;
	contact: Contact = new Contact();
	constructor(
		private route: ActivatedRoute
	) { }
	ngOnInit() {		
		this.contacId = this.route.snapshot.params.contacId;
	}
}
