import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BananaCreamPieRecipePage } from './banana-cream-pie-recipe';

@NgModule({
  declarations: [
    BananaCreamPieRecipePage,
  ],
  imports: [
    IonicPageModule.forChild(BananaCreamPieRecipePage),
  ],
})
export class BananaCreamPieRecipePageModule {}
