import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupCallPageRoutingModule } from './pickup-call-routing.module';

import { PickupCallPage } from './pickup-call.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupCallPageRoutingModule,
    SharedModuleModule,
  ],
  declarations: [PickupCallPage]
})
export class PickupCallPageModule {}
