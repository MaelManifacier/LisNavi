import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageRoutingModule } from './image-routing.module';
import { ImageComponent } from './image.component';
import { ImageAccueilPage } from './pages/image-accueil/image-accueil.page';
import { OnePageStoryDetailComponent } from './components/one-page-story-detail/one-page-story-detail.component';


@NgModule({
  declarations: [ImageComponent, ImageAccueilPage, OnePageStoryDetailComponent],
  imports: [
    CommonModule,
    ImageRoutingModule
  ]
})
export class ImageModule { }
