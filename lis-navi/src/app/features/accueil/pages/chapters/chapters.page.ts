import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LISTCHAPTERSEDWIGE } from '../../mocks/list-chapters-edwige.mock';
import { StoryCard } from '../../model/story-card.model';

@Component({
  templateUrl: './chapters.page.html',
  styleUrls: ['./chapters.page.scss']
})
export class ChaptersPage implements OnInit {

  storyName = '';
  chapters?: StoryCard[];

  cardChapterSelected?: StoryCard;
  isCardChapterSelected = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.storyName = params.get('storyName') ?? '';
      this.getStoryFromName();
      window.scrollTo(0, 0);
    });
  }

  getStoryFromName(): void {
    switch (this.storyName) {
      case 'edwige':
        this.chapters = LISTCHAPTERSEDWIGE;
        break;
    }
  }

  selectCardChapter(chapter: StoryCard): void {
    this.cardChapterSelected = chapter;
    this.isCardChapterSelected = true;
  }

}
