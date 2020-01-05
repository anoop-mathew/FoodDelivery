import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { IndianComponent } from './page/indian/indian.component';
import { ChineseComponent } from './page/chinese/chinese.component';
import { AmericanComponent } from './page/american/american.component';
import { FoodComponent } from './food.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'indian',
    pathMatch: 'full'
  },
  {
  path: '',
    component: FoodComponent,
    children: [
      {
        path: 'indian',
        component: IndianComponent
      },
      {
        path: 'chinese',
        component: ChineseComponent
      },
      {
        path: 'american',
        component: AmericanComponent
      },
  
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule {}
