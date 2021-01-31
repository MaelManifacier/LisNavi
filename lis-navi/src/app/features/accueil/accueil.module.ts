import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './accueil.component';
import { AccueilPage } from './pages/accueil/accueil.page';
import { AccueilCardStoryComponent } from './components/accueil-card-story/accueil-card-story.component';


@NgModule({
  declarations: [
    AccueilComponent,
    AccueilPage,
    AccueilCardStoryComponent,
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule
  ]
})
export class AccueilModule { }
