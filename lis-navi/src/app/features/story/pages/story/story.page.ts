import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PAGES } from '../../mocks/pages.mock';
import { Page } from '../../model/page.model';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss']
})
export class StoryPage implements OnInit {

  pages: Page[] = PAGES;

  currentPage : number = 1;

  constructor(
    private route : ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('id') ?? '1'),
    ).subscribe((id : string) => {
      console.log("PARAM : ", id)
      this.currentPage = parseInt(id);
    })

    window.scrollTo(0, 0);
  }

  last() {
    const idNavigate : number = this.currentPage > 1 ? this.currentPage  -1 : 1;
    this.router.navigate(['/story/', idNavigate]);
  }

  next() {
    const idNavigate : number = this.currentPage < this.pages.length ? this.currentPage + 1 : 16;
    this.router.navigate(['/story/', idNavigate]);
  }

}
