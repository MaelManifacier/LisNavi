import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'story/accueil', pathMatch: 'full' },
  { path: 'story', loadChildren: () => import('./features/story/story.module').then(m => m.StoryModule) },
  { path: 'collection', loadChildren: () => import('./features/collection/collection.module').then(m => m.CollectionModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
