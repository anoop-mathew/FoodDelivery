import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FoodComponent } from './food.component';
import { IndianComponent } from './page/indian/indian.component';
import { ChineseComponent } from './page/chinese/chinese.component';
import { AmericanComponent } from './page/american/american.component';
import { FoodRoutingModule } from './food.routing';



@NgModule({
  declarations: [
    FoodComponent,
    IndianComponent,
    ChineseComponent,
    AmericanComponent
  ],
  imports: [SharedModule, FoodRoutingModule],
  exports: [],
  providers: [],
  entryComponents: []
})
export class FoodModule {}
