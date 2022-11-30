import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToSocialMediaComponent } from './call-to-social-media.component';

describe('CallToSocialMediaComponent', () => {
  let component: CallToSocialMediaComponent;
  let fixture: ComponentFixture<CallToSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallToSocialMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
