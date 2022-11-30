import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryCardsComponent } from './galery-cards.component';

describe('GaleryCardsComponent', () => {
  let component: GaleryCardsComponent;
  let fixture: ComponentFixture<GaleryCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleryCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
