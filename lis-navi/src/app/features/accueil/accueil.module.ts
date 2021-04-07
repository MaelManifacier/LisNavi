import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './accueil.component';
import { AccueilPage } from './pages/accueil/accueil.page';
import { AccueilCardStoryComponent } from './components/accueil-card-story/accueil-card-story.component';
import { AccueilDoubleCardStoryComponent } from './components/accueil-double-card-story/accueil-double-card-story.component';
import { ChaptersPage } from './pages/chapters/chapters.page';


@NgModule({
  declarations: [
    AccueilComponent,
    AccueilPage,
    AccueilCardStoryComponent,
    AccueilDoubleCardStoryComponent,
    ChaptersPage,
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule
  ]
})
export class AccueilModule { }
