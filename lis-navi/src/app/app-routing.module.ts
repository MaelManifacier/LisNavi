import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'story', loadChildren: () => import('./features/story/story.module').then(m => m.StoryModule) },
  { path: 'collection', loadChildren: () => import('./features/collection/collection.module').then(m => m.CollectionModule) },
  { path: 'accueil', loadChildren: () => import('./features/accueil/accueil.module').then(m => m.AccueilModule) },
  { path: '**', loadChildren: () => import('./features/boo/boo.module').then(m => m.BooModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
