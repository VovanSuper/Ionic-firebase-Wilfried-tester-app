import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestsPage } from './tests.page';
import { CommonsModule } from 'src/app/shared/common/common.module';

const testsRouting: Routes = [{ path: '', component: TestsPage }];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CommonsModule,
    RouterModule.forChild(testsRouting)
  ],
  declarations: [TestsPage]
})
export class TestsPageModule { }
