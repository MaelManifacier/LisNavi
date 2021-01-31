import { Component, OnInit } from '@angular/core';
import { LISTSTORIES } from '../../mocks/list-stories.mock';
import { StoryCard } from '../../model/story-card.model';

@Component({
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss']
})
export class AccueilPage implements OnInit {

  listStories : StoryCard[] = LISTSTORIES;

  constructor() { }

  ngOnInit(): void {
  }

}
