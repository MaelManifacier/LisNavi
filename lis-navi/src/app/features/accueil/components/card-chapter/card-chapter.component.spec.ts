import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChapterComponent } from './card-chapter.component';

describe('CardChapterComponent', () => {
  let component: CardChapterComponent;
  let fixture: ComponentFixture<CardChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardChapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
