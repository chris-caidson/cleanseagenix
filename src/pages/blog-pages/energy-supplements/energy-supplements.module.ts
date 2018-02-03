import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnergySupplementsPage } from './energy-supplements';

@NgModule({
  declarations: [
    EnergySupplementsPage,
  ],
  imports: [
    IonicPageModule.forChild(EnergySupplementsPage),
  ],
})
export class EnergySupplementsPageModule {}
