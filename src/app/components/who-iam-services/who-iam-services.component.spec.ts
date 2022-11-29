import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIAmServicesComponent } from './who-iam-services.component';

describe('WhoIAmServicesComponent', () => {
	let component: WhoIAmServicesComponent;
	let fixture: ComponentFixture<WhoIAmServicesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [WhoIAmServicesComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(WhoIAmServicesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
