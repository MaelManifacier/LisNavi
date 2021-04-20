import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { StoryCard } from '../../model/story-card.model';

@Component({
  selector: 'app-card-chapter',
  templateUrl: './card-chapter.component.html',
  styleUrls: ['./card-chapter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardChapterComponent implements OnInit {

  @Input() cardChapter?: StoryCard;
  @Input() storyName?: string;

  isPair = true;

  constructor() { }

  ngOnInit(): void {
    // test si pair ou impair pour savoir si décaler
    if ((this.cardChapter?.noChapitre || 1) % 2 === 1) {
      this.isPair = false;
    }
  }

  setCardStyle(): any {
    const loCardStyle = {
      transform : `translateX(${this.isPair ? '20px' : '-20px'})`
    };
    return loCardStyle;
  }

}
