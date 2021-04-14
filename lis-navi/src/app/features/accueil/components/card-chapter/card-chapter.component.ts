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

  constructor() { }

  ngOnInit(): void {
  }

}
