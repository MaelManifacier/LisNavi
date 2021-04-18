import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LISTONEPAGESTORIES } from '../../mocks/list-one-page-stories.mock';
import { OnePageStory } from '../../model/one-page-story.model';

@Component({
  templateUrl: './image-accueil.page.html',
  styleUrls: ['./image-accueil.page.scss']
})
export class ImageAccueilPage implements OnInit {

  listOnePagesStories: OnePageStory[] = LISTONEPAGESTORIES;
  text: OnePageStory = LISTONEPAGESTORIES[0];
  textName = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.textName = params.get('textName') ?? '';
      this.getStoryFromName();
      window.scrollTo(0, 0);
    });
  }

  getStoryFromName(): void {
    switch (this.textName) {
      case 'monsieur-le-vent':
        this.text = LISTONEPAGESTORIES[0];
        break;
      default :
        this.text = LISTONEPAGESTORIES[0];
        break;
    }
  }

  clickMenu(title: string) {
    this.router.navigate(['image/', { textName: title }]);
  }

}
