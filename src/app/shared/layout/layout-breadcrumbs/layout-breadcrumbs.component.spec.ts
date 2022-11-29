import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBreadcrumbsComponent } from './layout-breadcrumbs.component';

describe('LayoutBreadcrumbsComponent', () => {
  let component: LayoutBreadcrumbsComponent;
  let fixture: ComponentFixture<LayoutBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutBreadcrumbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
