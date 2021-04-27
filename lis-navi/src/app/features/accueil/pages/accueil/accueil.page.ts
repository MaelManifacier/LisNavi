import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LISTSTORIES } from '../../mocks/list-stories.mock';
import { StoryCard } from '../../model/story-card.model';

@Component({
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss']
})
export class AccueilPage implements OnInit {

  listStories : StoryCard[] = LISTSTORIES;
  storyCardEdwige = {
    title: 'Edwige',
    url: 'edwige',
    img: 'assets/imgCardStories/edwige.jpg',
  };

  stars?: Star[] = [];
  moonPhase = 1;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const date = new Date();
    // this.getMoonPhase(date.getFullYear(), date.getMonth(), date.getDate())
    this.moonPhase = this.getMoonPhase(date.getFullYear(), date.getMonth(), date.getDate());

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
  }

  getMoonPhase(year: number, month: number, day: number): number
  {
    let c = 0;
    let e = 0;
    let jd = 0;
    let b = 0;
    if (month < 3) {
      year--;
      month += 12;
    }
    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09; //jd is total days elapsed
    jd /= 29.5305882; //divide by the moon cycle
    b = Math.floor(jd); //parseInt(jd); //int(jd) -> b, take integer part of jd
    jd -= b; //subtract integer part to leave fractional part of original jd
    b = Math.round(jd * 8); //scale fraction from 0-8 and round
    if (b >= 8 ) {
      b = 0; //0 and 8 are the same so turn 8 into 0
    }

    // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon

    return b;
  }

  foxClicked = 1;
  clickFox() {
    if(this.foxClicked === 3) {
      this.foxClicked = 0;
      this.router.navigate(['/image']);
    } else {
      this.foxClicked += 1;
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
