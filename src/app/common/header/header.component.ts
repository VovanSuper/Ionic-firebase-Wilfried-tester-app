import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from 'src/app/common/popover-menu/popover-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('title') title = '';

  constructor(private popover: PopoverController) { }

  ngOnInit() {}

  async open($event) {
    let menu = await this.popover.create({
      component: PopoverMenuComponent,
      // event: $event,
      translucent: true,
      backdropDismiss: true,
      // showBackdrop: false,
      cssClass: 'popover-menu'
    });
    await menu.present();
  }

}
