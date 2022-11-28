import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSocialMediaComponent } from './our-social-media.component';

describe('OurSocialMediaComponent', () => {
  let component: OurSocialMediaComponent;
  let fixture: ComponentFixture<OurSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSocialMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
