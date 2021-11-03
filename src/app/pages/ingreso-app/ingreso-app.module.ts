import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoAppPageRoutingModule } from './ingreso-app-routing.module';

import { IngresoAppPage } from './ingreso-app.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoAppPageRoutingModule
  ],
  declarations: [IngresoAppPage]
})
export class IngresoAppPageModule {}
