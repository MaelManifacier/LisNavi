import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PAGESGRAPH } from '../../mocks/pages-graph.mock';
import { PAGESLISNAVI } from '../../mocks/pages-lis-navi.mock';
import { Story } from '../../model/story.model';

@Component({
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
})
export class StoryPage implements OnInit {

  story: Story = PAGESLISNAVI;

  currentPage : number = 1;
  storyName: string = '';

  constructor(
    private route : ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.currentPage = parseInt(params.get('id') ?? '1');
      this.storyName = params.get('storyName') ?? '';
      this.getStoryFromName();
      window.scrollTo(0, 0);
    });
  }

  getStoryFromName() {
    switch(this.storyName) {
      case 'lis-navi':
        this.story = PAGESLISNAVI;
        break;
      case 'graph':
        this.story = PAGESGRAPH;
        break;
    }
  }

  last() {
    const idNavigate : number = this.currentPage > 1 ? this.currentPage  -1 : 1;
    this.router.navigate(['/story/', { storyName: this.story.url, id: idNavigate }]);
  }

  next() {
    const idNavigate : number = this.currentPage < this.story.pages.length ? this.currentPage + 1 : 16;
    this.router.navigate(['/story/', { storyName: this.story.url, id: idNavigate }]);
  }

}
