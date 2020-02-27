import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from "@ionic/angular";

@Component({
  selector: 'app-popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.scss'],
})
export class PopoverMenuComponent implements OnInit {
  menuTitle = 'Menu';

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'About',
      url: '/tabs/tab1',
      icon: 'menu'
    },
    {
      title: 'Imprint',
      url: '/tabs/tab2',
      icon: 'paper-plane'
    },
    {
      title: 'Data Privacy',
      url: '/tabs/tab3',
      icon: 'person-circle'
    },
    
  ];

  constructor(private router: Router, private popover: PopoverController) { }

  ngOnInit() { }

  goto(path = '/tabs/tab1') {
    this.router.navigateByUrl(path);
    this.popover.dismiss();
  }

}
