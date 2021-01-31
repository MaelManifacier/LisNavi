import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilCardStoryComponent } from './accueil-card-story.component';

describe('AccueilCardStoryComponent', () => {
  let component: AccueilCardStoryComponent;
  let fixture: ComponentFixture<AccueilCardStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilCardStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilCardStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
