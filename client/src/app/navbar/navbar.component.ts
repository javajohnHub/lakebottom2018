import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { PanelMenu} from 'primeng/panelmenu';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
selectedLink;
links;
@ViewChild('el')
	el: PanelMenu;
  ngOnInit() {
    this.links = [
			{
				label: 'LakeBottom',
				title: '',
				items: [
					{
						label: 'Home',
						routerLink: ['/'],
						routerLinkActiveOptions: { exact: true },
						command: (event: any) => {
							this.el.model[0].expanded = false;
						}
          },
          {
						label: 'Albums',
						routerLink: ['/#albums'],
						routerLinkActiveOptions: { exact: true },
						command: (event: any) => {
							this.el.model[0].expanded = false;
						}
          },
          {
						label: 'Social',
						routerLink: ['/#social'],
						routerLinkActiveOptions: { exact: true },
						command: (event: any) => {
							this.el.model[0].expanded = false;
						}
          }
        ]
      }
    ];
  }

}
