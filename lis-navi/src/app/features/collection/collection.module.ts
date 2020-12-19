import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection.component';
import { CollectionPage } from './pages/collection/collection.page';
import { CollectionCardDetailComponent } from './components/collection-card-detail/collection-card-detail.component';


@NgModule({
  declarations: [CollectionComponent, CollectionPage, CollectionCardDetailComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule
  ]
})
export class CollectionModule { }
