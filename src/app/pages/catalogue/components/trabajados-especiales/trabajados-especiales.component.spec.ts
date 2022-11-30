import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadosEspecialesComponent } from './trabajados-especiales.component';

describe('TrabajadosEspecialesComponent', () => {
  let component: TrabajadosEspecialesComponent;
  let fixture: ComponentFixture<TrabajadosEspecialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadosEspecialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajadosEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
