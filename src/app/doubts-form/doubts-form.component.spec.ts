import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubtsFormComponent } from './doubts-form.component';

describe('DoubtsFormComponent', () => {
	let component: DoubtsFormComponent;
	let fixture: ComponentFixture<DoubtsFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DoubtsFormComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(DoubtsFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
