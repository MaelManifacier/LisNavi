import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryPage } from './pages/story/story.page';

const routes: Routes = [
  { path: '', component: StoryPage }, // /:storyName/:id
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryRoutingModule { }
