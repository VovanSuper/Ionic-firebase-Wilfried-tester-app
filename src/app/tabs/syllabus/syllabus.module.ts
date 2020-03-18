import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SyllabusPage } from './syllabus.page';
import { CommonsModule } from 'src/app/shared/common/common.module';

const syllabusRouting: Routes = [{ path: '', component: SyllabusPage }];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CommonsModule,
    RouterModule.forChild(syllabusRouting)
  ],
  declarations: [SyllabusPage]
})
export class SyllabusPageModule {}
