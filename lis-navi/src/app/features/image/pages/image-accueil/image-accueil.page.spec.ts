import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAccueilPage } from './image-accueil.page';

describe('ImageAccueilPage', () => {
  let component: ImageAccueilPage;
  let fixture: ComponentFixture<ImageAccueilPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAccueilPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAccueilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
