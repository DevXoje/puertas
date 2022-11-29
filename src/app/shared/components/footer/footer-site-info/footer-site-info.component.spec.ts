import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSiteInfoComponent } from './footer-site-info.component';

describe('FooterSiteInfoComponent', () => {
	let component: FooterSiteInfoComponent;
	let fixture: ComponentFixture<FooterSiteInfoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FooterSiteInfoComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(FooterSiteInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
