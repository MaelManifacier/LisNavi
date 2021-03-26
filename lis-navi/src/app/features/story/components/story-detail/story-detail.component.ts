import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef } from '@angular/core';
import { Page } from '../../model/page.model';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss'],
  queries: {
    "storyDetail": new ViewChild("storyDetail")
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryDetailComponent implements OnInit {

  @Input() page: Page = new Page();

  public storyDetail!: ElementRef;
  maxTextImgLen = 0;
  lenTexts = 0;
  lenImgs = 0;

  public scrollToTop() {
    this.storyDetail?.nativeElement.scrollTo(0,0);
  }

  constructor() { }

  ngOnInit(): void {
    this.lenTexts = this.page.texts.length;
    this.lenImgs = this.page.imgs.length;
    this.maxTextImgLen = this.lenTexts > this.lenImgs ? this.lenTexts : this.lenImgs;
      // (this.page?.texts.length || 0) > (this.page?.imgs.length || 0) ? (this.page?.texts.length || 0) : (this.page?.imgs.length || 0);
  }

  ngOnChanges(): void {
    this.scrollToTop();
  }

}
