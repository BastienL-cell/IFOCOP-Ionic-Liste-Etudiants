import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemPage } from '../add-item/add-item.page';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'addItem',
    component: AddItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
