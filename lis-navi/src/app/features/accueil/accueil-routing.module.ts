import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilPage } from './pages/accueil/accueil.page';
import { ChaptersPage } from './pages/chapters/chapters.page';

const routes: Routes = [
  { path: 'chapters', component: ChaptersPage },
  { path: '', component: AccueilPage, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilRoutingModule { }
