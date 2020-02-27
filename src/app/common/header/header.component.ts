import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/common/providers/menu.service';
import { IonMenu, PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from 'src/app/common/popover-menu/popover-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('title') title = 'Accelerated Learning';
  @Input('menu') menu: IonMenu = null;
  logoUrl = 'https://res.cloudinary.com/iicamp/image/upload/v1582385127/svg-logo_qemciz.svg';

  constructor(private menuSvc: MenuService, private popCtrl: PopoverController) { }

  ngOnInit() { }

  // toggleMenu() {
  // const id = this.menu.menuId
  // this.menuSvc.toggleMenu(id);
  // this.menuSvc.toggleMenu();
  // }

  async popOpen($event?: any) {
    let popover = await this.popCtrl.getTop();
    if (popover && popover.isConnected) {
      await this.popCtrl.dismiss();
    } else {
      let newPopover = await this.popoverCreate($event);
      await newPopover.present();
    }
  }

  private async  popoverCreate($ev) {
    return await this.popCtrl.create({
      component: PopoverMenuComponent,
      event: $ev,
      backdropDismiss: true,
      translucent: true,
      cssClass: 'app-menu__popover'
    });
  }

}
