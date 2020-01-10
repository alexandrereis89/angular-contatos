import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Contact } from 'src/app/model/Contact';
@Component({
   selector: "app-detail",
   templateUrl: "./detail.component.html",
   styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
   contacId: Number;
   contact: Contact = Object.assign(JSON.parse(sessionStorage.getItem('contato')) || {});
   constructor(
      private router: Router
   ) { }

   ngOnInit() {
      sessionStorage.removeItem('contato');
   }
   
   save(): void {
      let contactList: Contact[] = JSON.parse(sessionStorage.getItem('contactList'));

      if (!this.contact.id) {
         this.contact.id = contactList.length + 1;
      }else{
         contactList = contactList.filter(c => c.id != this.contact.id);
         console.log('filtrada', contactList)
      }

      contactList.push(this.contact);
      sessionStorage.setItem('contactList', JSON.stringify(contactList));
      this.router.navigate(['/']);
   }
}
