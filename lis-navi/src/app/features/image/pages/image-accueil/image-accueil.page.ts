import { Component, OnInit } from '@angular/core';
import { LISTONEPAGESTORIES } from '../../mocks/list-one-page-stories.mock';
import { OnePageStoryCard } from '../../model/one-page-story-card.model';

@Component({
  templateUrl: './image-accueil.page.html',
  styleUrls: ['./image-accueil.page.scss']
})
export class ImageAccueilPage implements OnInit {

  listOnePagesStories: OnePageStoryCard[] = LISTONEPAGESTORIES;

  constructor() { }

  ngOnInit(): void {
  }

}
