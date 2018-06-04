import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
	contacts = [
		{
			name: 'Pavel',
			surname: 'Cheremin'
		},
		{
			name: 'Alex',
			surname: 'Ruzenko'
		},
		{
			name: 'Alex',
			surname: 'Kapatsin'
		},
		{
			name: 'Vitaliy',
			surname: 'Ogonovskiy'
		},

	]
  constructor() { }

  ngOnInit() {
  }

}
