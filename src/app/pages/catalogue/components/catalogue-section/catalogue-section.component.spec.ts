import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueSectionComponent } from './catalogue-section.component';

describe('CatalogueSectionComponent', () => {
  let component: CatalogueSectionComponent;
  let fixture: ComponentFixture<CatalogueSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogueSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
