import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss', '../../app.component.scss']
})
export class NavComponent implements OnInit {

  navList: Array<{id: string; name: string, navLink: string}> = [
    { id: '1', name: 'Home', navLink: 'home' },
    { id: '2', name: 'About', navLink: 'about' },
    // { id: '3', name: 'Services', navLink: 'services' },
    { id: '3', name: 'Port Folio', navLink: 'portfolio' },
    { id: '4', name: 'Contact Me', navLink: 'contact' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
