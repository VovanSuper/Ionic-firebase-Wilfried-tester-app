import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'overview',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./overview/overview.module').then(m => m.OverviewPageModule)
          }
        ]
      },
      {
        path: 'syllabus',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./syllabus/syllabus.module').then(m => m.SyllabusPageModule)
          }
        ]
      },
      {
        path: 'tests',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./testings/tests.module').then(m => m.TestsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/overview',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
