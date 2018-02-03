import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SnackIdeasPage } from './snack-ideas';

@NgModule({
  declarations: [
    SnackIdeasPage,
  ],
  imports: [
    IonicPageModule.forChild(SnackIdeasPage),
  ],
})
export class SnackIdeasPageModule {}
