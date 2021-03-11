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
    let angle = Math.random() * Math.PI * 2;
    const radius = 15000;
    let rad = Math.random() * radius;
    for(let i = 0; i < 200; i++) {
      this.stars?.push(new Star('starx1', `${Math.cos(angle) * Math.sqrt(rad)}vh`, `${Math.sin(angle) * Math.sqrt(rad)}vw`, '0', '0'));
      angle = Math.random() * Math.PI * 2;
      rad = Math.random() * radius;
    }
    for(let i = 0; i < 50; i++) {
      // `${Math.floor(Math.random() * 100)}vh`
      this.stars?.push(new Star('starx2', `${Math.cos(angle) * Math.sqrt(rad)}vh`, `${Math.sin(angle) * Math.sqrt(rad)}vw`, '0', '0'));
      angle = Math.random() * Math.PI * 2;
      rad = Math.random() * radius;
    }
    console.log(this.stars)
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
