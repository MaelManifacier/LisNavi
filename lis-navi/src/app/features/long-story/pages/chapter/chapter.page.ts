import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CHAPTER1_EDWIGE } from '../../mocks/pages-chap1.mock';
import { Chapter } from '../../model/chapter.model';

@Component({
  templateUrl: './chapter.page.html',
  styleUrls: ['./chapter.page.scss']
})
export class ChapterPage implements OnInit {

  currentPage: number = 1;
  storyName: string = '';
  chapterUrl: string = '';
  // chapterName = '';

  chapter!: Chapter;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.currentPage = parseInt(params.get('id') ?? '1');
      this.storyName = params.get('storyName') ?? '';
      this.chapterUrl = params.get('chapterUrl') ?? '';
      this.getStoryFromName();
      window.scrollTo(0, 0);
    });
  }

  getStoryFromName(): void {
    switch (this.chapterUrl) {
      case 'concert':
        this.chapter = CHAPTER1_EDWIGE;
        break;
    }
  }

  last(): void {
    const idNavigate: number = this.currentPage > 1 ? this.currentPage -1 : 1;
    this.router.navigate(['/long-story/chapter/', { storyName: this.storyName, chapterUrl: this.chapter.url, id: idNavigate }]);
  }

  next(): void {
    const idNavigate: number = this.currentPage < this.chapter.pages.length ? this.currentPage + 1 : 16;
    this.router.navigate(['/long-story/chapter/', { storyName: this.storyName, chapterUrl: this.chapter.url, id: idNavigate }]);
  }

}
