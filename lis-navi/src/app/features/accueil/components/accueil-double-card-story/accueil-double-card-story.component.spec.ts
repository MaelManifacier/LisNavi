import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilDoubleCardStoryComponent } from './accueil-double-card-story.component';

describe('AccueilDoubleCardStoryComponent', () => {
  let component: AccueilDoubleCardStoryComponent;
  let fixture: ComponentFixture<AccueilDoubleCardStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilDoubleCardStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilDoubleCardStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
