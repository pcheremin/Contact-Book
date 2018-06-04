import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {


	myUser = {
		name:'Pavel',
		surname:'Cheremin'
	}

categories = ['ClassMates', 'Friends', 'Work']

  constructor() { }

  ngOnInit() {
  }

}
