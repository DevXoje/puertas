import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereWeAreComponent } from './where-we-are.component';

describe('WhereWeAreComponent', () => {
	let component: WhereWeAreComponent;
	let fixture: ComponentFixture<WhereWeAreComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [WhereWeAreComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(WhereWeAreComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
