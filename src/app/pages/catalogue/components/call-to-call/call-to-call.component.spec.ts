import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToCallComponent } from './call-to-call.component';

describe('CallToCallComponent', () => {
  let component: CallToCallComponent;
  let fixture: ComponentFixture<CallToCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallToCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
