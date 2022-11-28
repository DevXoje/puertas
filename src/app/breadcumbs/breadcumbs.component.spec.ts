import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcumbsComponent } from './breadcumbs.component';

describe('BreadcumbsComponent', () => {
  let component: BreadcumbsComponent;
  let fixture: ComponentFixture<BreadcumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcumbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
