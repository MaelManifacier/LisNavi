import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooRoutingModule } from './boo-routing.module';
import { BooComponent } from './boo.component';
import { NotFoundPage } from './pages/not-found/not-found.page';


@NgModule({
  declarations: [BooComponent, NotFoundPage],
  imports: [
    CommonModule,
    BooRoutingModule
  ]
})
export class BooModule { }
