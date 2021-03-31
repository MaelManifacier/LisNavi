import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageAccueilPage } from './pages/image-accueil/image-accueil.page';

const routes: Routes = [
  { path: '', component: ImageAccueilPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageRoutingModule { }
