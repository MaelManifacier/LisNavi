import { Component, OnInit } from '@angular/core';
import { LISTSTORIES } from '../../mocks/list-stories.mock';
import { StoryCard } from '../../model/story-card.model';

@Component({
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss']
})
export class AccueilPage implements OnInit {

  listStories : StoryCard[] = LISTSTORIES;

  stars?: Star[] = [];

  constructor() { }

  ngOnInit(): void {
    this.stars?.push(new Star('etoile-filante', `1vh`, `10vw`, '0', '0'));
    for(let i = 0; i < 150; i++) {
      this.stars?.push(new Star('starx1', `${Math.floor(Math.random() * 100)}vh`, `${i}vw`, '0', '0'));
    }
    for(let i = 0; i < 20; i++) {
      this.stars?.push(new Star('starx2', `${Math.floor(Math.random() * 100)}vh`, `${Math.floor(Math.random() * 100)}vw`, '0', '0'));
    }
  }

}

export class Star {
  size: string;
  top: string;
  left: string;
  transition: string;
  rotation: string;

  constructor(size: string, top: string, left: string, transition: string, rotation: string) {
    this.size = size;
    this.top = top;
    this.left = left;
    this.transition = transition;
    this.rotation = rotation;
  }
}
