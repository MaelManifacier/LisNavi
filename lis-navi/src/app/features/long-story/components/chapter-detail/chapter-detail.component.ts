import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Page } from '../../model/page.model';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChapterDetailComponent implements OnInit {

  @Input() page: Page = new Page();

  constructor() { }

  ngOnInit(): void {
  }

}
