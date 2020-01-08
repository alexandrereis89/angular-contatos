import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/Contact';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	contacts: Contact[] = [];
	filteredContacts: Contact[] = this.contacts;
	filter: String = '';

	constructor() { }

	ngOnInit() {
		this.contacts = [
			{
				id: 1,
				email: 'teste@teste.com.br',
				name: 'alexandre',
				phoneNumber: '54 99999-9999'
			},
			{
				id: 2,
				email: 'teste2@teste2.com.br',
				name: 'alexandre 222',
				phoneNumber: '54 2222-22222'
			},
		]
		console.log(this.contacts)
	}

}
