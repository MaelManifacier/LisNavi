import { Component, OnInit, ChangeDetectionStrategy, Input, SimpleChanges } from '@angular/core';
import { Page } from '../../model/page.model';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryDetailComponent implements OnInit {

  @Input() page?: Page;

  /*
  story: Page = {
    noPage: 1,
    text1: 'Bonjour, je suis Xue. Le 2 Shi\'èr yuè, en plein milieu de l\'hiver, j\'ai dû quitter mon village.',
    text2: '',
    image1: 'assets/story/1.svg',
    isBackground: false,
    isFlower: false,
    image2: ''
  };
  */

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("Change")
    window.scrollTo(0, 0);
  }

}
