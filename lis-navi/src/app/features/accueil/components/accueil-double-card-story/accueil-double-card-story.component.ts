import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { StoryCard } from '../../model/story-card.model';

@Component({
  selector: 'app-accueil-double-card-story',
  templateUrl: './accueil-double-card-story.component.html',
  styleUrls: ['./accueil-double-card-story.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccueilDoubleCardStoryComponent implements OnInit {

  @Input() storyCard?: StoryCard;

  constructor() { }

  ngOnInit(): void {
  }

  setCardStyle() {
    let loCardStyle = {
      'background-image' : `url(${this.storyCard?.img})`
    }
    return loCardStyle;
  }

}
