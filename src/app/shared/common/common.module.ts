import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { PopoverMenuComponent } from './popover-menu/popover-menu.component'
import { FormsModule } from '@angular/forms';
import { ContentContainerComponent } from './content-container/content-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    PopoverMenuComponent,
    ContentContainerComponent
  ],
  declarations: [
    HeaderComponent,
    PopoverMenuComponent,
    ContentContainerComponent
  ]
})
export class CommonsModule { }
