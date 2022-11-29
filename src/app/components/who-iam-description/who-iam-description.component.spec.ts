import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIAmDescriptionComponent } from './who-iam-description.component';

describe('WhoIAmDescriptionComponent', () => {
	let component: WhoIAmDescriptionComponent;
	let fixture: ComponentFixture<WhoIAmDescriptionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [WhoIAmDescriptionComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(WhoIAmDescriptionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
