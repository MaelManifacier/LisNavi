import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupConfirmComponent } from './popup-confirm/popup-confirm.component';


@NgModule({
  declarations: [
    PopupConfirmComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopupConfirmComponent,
  ]
})
export class PopupConfirmationModule { }
