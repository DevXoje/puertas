import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertasInteriorComponent } from './puertas-interior.component';

describe('PuertasInteriorComponent', () => {
  let component: PuertasInteriorComponent;
  let fixture: ComponentFixture<PuertasInteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuertasInteriorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuertasInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
