import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterPage } from './pages/chapter/chapter.page';

const routes: Routes = [
  { path: 'chapter', component: ChapterPage },
  { path: '', redirectTo: 'chapters', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LongStoryRoutingModule { }
