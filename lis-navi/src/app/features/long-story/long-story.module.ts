import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LongStoryRoutingModule } from './long-story-routing.module';
import { LongStoryComponent } from './long-story.component';
import { ChapterPage } from './pages/chapter/chapter.page';
import { ChapterDetailComponent } from './components/chapter-detail/chapter-detail.component';


@NgModule({
  declarations: [LongStoryComponent, ChapterPage, ChapterDetailComponent],
  imports: [
    CommonModule,
    LongStoryRoutingModule
  ],
  exports: [ChapterDetailComponent]
})
export class LongStoryModule { }
