import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/model/Contact';

@Component({
  selector: 'app-contact-box',
  templateUrl: './contact-box.component.html',
  styles: []
})
export class ContactBoxComponent implements OnInit {
  @Input() contact: Contact

  constructor() { }

  ngOnInit() {
    console.log('box', this.contact)
  }

}
