import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/model/Contact';

@Component({
   selector: 'app-contact-box',
   templateUrl: './contact-box.component.html',
   styleUrls: ['./contact-box.component.scss']

})

export class ContactBoxComponent implements OnInit {
   @Input() contact: Contact

   constructor(

   ) { }

   ngOnInit() {

   }

   detalhe(contato: Contact): void {
      console.log(contato)
      sessionStorage.setItem('contato', JSON.stringify(contato));
   }

}
