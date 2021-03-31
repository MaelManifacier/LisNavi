import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageStoryDetailComponent } from './one-page-story-detail.component';

describe('OnePageStoryDetailComponent', () => {
  let component: OnePageStoryDetailComponent;
  let fixture: ComponentFixture<OnePageStoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnePageStoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePageStoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
