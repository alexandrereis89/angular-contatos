import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/model/Contact';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-box',
  templateUrl: './contact-box.component.html',
  styleUrls:['./contact-box.component.scss']
  
})

export class ContactBoxComponent implements OnInit {
  @Input() contact: Contact

  constructor(
    public router: Router,
		private route: ActivatedRoute
    
  ) { }

  ngOnInit() {
    
  }

  detalhe(id: Number): void {
    localStorage.setItem('contato', JSON.stringify(this.contact));
  }

}
