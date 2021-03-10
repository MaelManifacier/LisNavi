import { Component, OnInit } from '@angular/core';
import { LISTSTORIES } from '../../mocks/list-stories.mock';
import { StoryCard } from '../../model/story-card.model';

@Component({
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss']
})
export class AccueilPage implements OnInit {

  listStories : StoryCard[] = LISTSTORIES;

  stars?: [string, string, string];

  constructor() { }

  ngOnInit(): void {
    this.stars = ['starx1', '1vh', '2vw'];
    for(let i = 0; i < 200; i++) {
      this.stars.push('starx1', `${i}vh`, `${i}vw`);
    }
  }

  getStyle(star: any) {
    let loCardStyle = {};
    loCardStyle = {
      'border-left-color' : '#E85849'
    };
    loCardStyle = {
      'left': Math.floor(Math.random() * 100) //star[1]
      , 'top': star[2]
    };
    return loCardStyle;
  }

}
