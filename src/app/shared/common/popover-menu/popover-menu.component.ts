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

  appPages = {
    About: {
      title: 'About',
      url: '/tabs/overview',
      icon: 'menu'
    },
    Imprint: {
      title: 'Imprint',
      url: '/tabs/syllabus',
      icon: 'paper-plane'
    },
    DataPrivacy: {
      title: 'Data Privacy',
      url: '/tabs/tests',
      icon: 'person-circle'
    }
  };

  get Pages() {
    return Object.values(this.appPages).map(({ title, icon = null, url = null }: { title: string, icon: string | null, url: string | null }) => { return { title, icon, url }; });
  }

  get PagesCount() {
    return this.Pages.length - 1;
  }

  constructor(private router: Router, private popover: PopoverController) { }

  ngOnInit() { }

  goto(path = this.appPages.About.url) {
    this.router.navigateByUrl(path);
    this.popover.dismiss();
  }


}
