import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/Contact';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   contacts: Contact[] = Object.assign(JSON.parse(sessionStorage.getItem('contactList')) || []);
   filteredContacts: Contact[] = this.contacts;
   filter: String = '';

   constructor() { }

   ngOnInit() {
      sessionStorage.clear();
      sessionStorage.setItem('contactList', JSON.stringify(this.contacts));
   }

   filterAlbuns = (word: string) => {
      console.log(word)
      this.filteredContacts = this.contacts.filter(contact =>
         contact.name.includes(word)
      );
   };

}
