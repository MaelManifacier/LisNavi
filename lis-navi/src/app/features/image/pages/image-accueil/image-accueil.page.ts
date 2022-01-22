import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LISTONEPAGESTORIES } from '../../mocks/list-one-page-stories.mock';
import { OnePageStory } from '../../model/one-page-story.model';

@Component({
  templateUrl: './image-accueil.page.html',
  styleUrls: ['./image-accueil.page.scss']
})
export class ImageAccueilPage implements OnInit {

  listOnePagesStories: OnePageStory[] = LISTONEPAGESTORIES;
  text?: OnePageStory;
  textName = '';

  isTextePageVide = false;

  @HostListener("window:scroll", [])
  onScroll(): void {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // you're at the bottom of the page
      console.log('Bottom !')
    }
  }

  @ViewChild('ScrollText') private scrollText!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.textName = params.get('textName') ?? '';
      this.getStoryFromName();
    });
  }

  ngAfterViewInit(): void {
    // this.scrollText.nativeElement.classList.add('background-if-not-scrolled');
    this.scrollText.nativeElement.scrollTo(0, 0);
  }

  onScrollText(event: any) {
    if (event.target.scrollTop >= event.target.scrollTopMax - 20) {
      this.scrollText.nativeElement.classList.remove('background-if-not-scrolled');
    } else {
      this.scrollText.nativeElement.classList.add('background-if-not-scrolled');
    }
  }

  getStoryFromName(): void {
    this.isTextePageVide = false;
    switch (this.textName) {
      case 'monsieur-le-vent':
        this.text = LISTONEPAGESTORIES[0];
        break;
      case 'Pluie':
        this.text = LISTONEPAGESTORIES[1];
        break;
      case 'Neige':
      default :
        this.text = undefined;
        this.isTextePageVide = true;
        break;
    }
    window.scrollTo(0, 0);
  }

  clickMenu(title: string) {
    this.router.navigate(['image/', { textName: title }]);
    this.scrollText.nativeElement.scrollTo(0, 0);
  }

}
