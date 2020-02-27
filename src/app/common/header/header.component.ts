import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/common/providers/menu.service';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('title') title = 'Accelerated Learning';
  @Input('menu') menu: IonMenu = null;

  constructor(private menuSvc: MenuService) { }

  ngOnInit() { }

  toggleMenu() {
    // const id = this.menu.menuId
    // this.menuSvc.toggleMenu(id);
    this.menuSvc.toggleMenu();
  }

}
