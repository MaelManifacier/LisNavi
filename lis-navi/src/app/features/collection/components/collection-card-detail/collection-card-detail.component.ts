import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-collection-card-detail',
  templateUrl: './collection-card-detail.component.html',
  styleUrls: ['./collection-card-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionCardDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
