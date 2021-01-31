import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { StoryCard } from 'src/app/features/accueil/model/story-card.model';

@Component({
  selector: 'app-accueil-card-story',
  templateUrl: './accueil-card-story.component.html',
  styleUrls: ['./accueil-card-story.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccueilCardStoryComponent implements OnInit {

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
