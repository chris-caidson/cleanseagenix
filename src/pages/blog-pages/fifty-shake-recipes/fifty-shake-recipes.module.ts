import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiftyShakeRecipesPage } from './fifty-shake-recipes';

@NgModule({
  declarations: [
    FiftyShakeRecipesPage,
  ],
  imports: [
    IonicPageModule.forChild(FiftyShakeRecipesPage),
  ],
})
export class FiftyShakeRecipesPageModule {}
