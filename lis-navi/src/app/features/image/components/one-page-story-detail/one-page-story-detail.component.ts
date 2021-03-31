import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-one-page-story-detail',
  templateUrl: './one-page-story-detail.component.html',
  styleUrls: ['./one-page-story-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnePageStoryDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
