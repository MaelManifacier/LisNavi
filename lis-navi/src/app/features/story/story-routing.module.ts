import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilPage } from './pages/accueil/accueil.page';
import { StoryPage } from './pages/story/story.page';

const routes: Routes = [
  { path: 'accueil', component: AccueilPage },
  { path: ':id', component: StoryPage },
  { path: '', redirectTo: 'accueil' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryRoutingModule { }
