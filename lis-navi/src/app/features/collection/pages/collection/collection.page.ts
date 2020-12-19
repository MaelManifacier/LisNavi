import { Component, OnInit } from '@angular/core';
import { PAGESCOLLECTION } from '../../mocks/page-collection.mock';
import { PageCollection } from '../../model/page-collection.model';

@Component({
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss']
})
export class CollectionPage implements OnInit {

  pagesCollection : PageCollection[] = PAGESCOLLECTION;

  constructor() { }

  ngOnInit(): void {
  }

}
