import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToContactComponent } from './call-to-contact.component';

describe('CallToContactComponent', () => {
  let component: CallToContactComponent;
  let fixture: ComponentFixture<CallToContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallToContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
