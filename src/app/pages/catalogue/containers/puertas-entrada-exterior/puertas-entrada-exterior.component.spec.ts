import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertasEntradaExteriorComponent } from './puertas-entrada-exterior.component';

describe('PuertasEntradaExteriorComponent', () => {
  let component: PuertasEntradaExteriorComponent;
  let fixture: ComponentFixture<PuertasEntradaExteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuertasEntradaExteriorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuertasEntradaExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
