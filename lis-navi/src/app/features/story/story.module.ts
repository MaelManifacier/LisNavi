import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryPage } from './pages/story/story.page';
import { StoryDetailComponent } from './components/story-detail/story-detail.component';
import { AccueilPage } from './pages/accueil/accueil.page';


@NgModule({
  declarations: [
    StoryPage,
    StoryDetailComponent,
    AccueilPage
  ],
  imports: [
    CommonModule,
    StoryRoutingModule
  ]
})
export class StoryModule { }
