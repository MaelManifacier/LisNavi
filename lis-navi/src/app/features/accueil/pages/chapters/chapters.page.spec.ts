import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersPage } from './chapters.page';

describe('ChaptersPage', () => {
  let component: ChaptersPage;
  let fixture: ComponentFixture<ChaptersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaptersPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
