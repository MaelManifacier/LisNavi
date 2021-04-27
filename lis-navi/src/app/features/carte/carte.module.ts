import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteRoutingModule } from './carte-routing.module';
import { CarteComponent } from './carte.component';


@NgModule({
  declarations: [CarteComponent],
  imports: [
    CommonModule,
    CarteRoutingModule
  ]
})
export class CarteModule { }
