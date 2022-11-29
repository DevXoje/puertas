import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroParallaxComponent } from './hero-parallax.component';

describe('HeroParallaxComponent', () => {
	let component: HeroParallaxComponent;
	let fixture: ComponentFixture<HeroParallaxComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeroParallaxComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HeroParallaxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
