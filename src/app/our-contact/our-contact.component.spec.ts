import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurContactComponent } from './our-contact.component';

describe('OurContactComponent', () => {
	let component: OurContactComponent;
	let fixture: ComponentFixture<OurContactComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [OurContactComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(OurContactComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
