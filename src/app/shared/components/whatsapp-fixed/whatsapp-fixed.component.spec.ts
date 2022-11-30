import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappFixedComponent } from './whatsapp-fixed.component';

describe('WhatsappFixedComponent', () => {
  let component: WhatsappFixedComponent;
  let fixture: ComponentFixture<WhatsappFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
