import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StrawberryShakeRecipePage } from './strawberry-shake-recipe';

@NgModule({
  declarations: [
    StrawberryShakeRecipePage,
  ],
  imports: [
    IonicPageModule.forChild(StrawberryShakeRecipePage),
  ],
})
export class StrawberryShakeRecipePageModule {}
