import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCardDetailComponent } from './collection-card-detail.component';

describe('CollectionCardDetailComponent', () => {
  let component: CollectionCardDetailComponent;
  let fixture: ComponentFixture<CollectionCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
