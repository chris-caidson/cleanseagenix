import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KnowYourProteinPage } from './know-your-protein';

@NgModule({
  declarations: [
    KnowYourProteinPage,
  ],
  imports: [
    IonicPageModule.forChild(KnowYourProteinPage),
  ],
})
export class KnowYourProteinPageModule {}
