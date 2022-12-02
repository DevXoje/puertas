import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmariosVestidoresComponent } from './armarios-vestidores.component';

describe('ArmariosVestidoresComponent', () => {
  let component: ArmariosVestidoresComponent;
  let fixture: ComponentFixture<ArmariosVestidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmariosVestidoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmariosVestidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
