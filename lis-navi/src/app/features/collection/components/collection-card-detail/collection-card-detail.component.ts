import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { PageCollection } from '../../model/page-collection.model';

@Component({
  selector: 'app-collection-card-detail',
  templateUrl: './collection-card-detail.component.html',
  styleUrls: ['./collection-card-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionCardDetailComponent implements OnInit {

  @Input() pageCollection?: PageCollection;

  constructor() { }

  ngOnInit(): void {
  }

}
