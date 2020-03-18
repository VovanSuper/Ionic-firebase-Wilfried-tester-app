import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccordionModule } from "@ngx-dummy/accordion-simple";

import { OverviewPage } from './overview.page';
import { CommonsModule } from 'src/app/shared/common/common.module';

const overviewRouting: Routes = [{ path: '', component: OverviewPage }];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CommonsModule,
    AccordionModule,
    RouterModule.forChild(overviewRouting)
  ],
  declarations: [OverviewPage]
})
export class OverviewPageModule { }
