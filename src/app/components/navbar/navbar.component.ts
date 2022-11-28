import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HostListener } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(
			map((result) => result.matches),
			shareReplay()
		);

	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		let element = document.querySelector('mat-toolbar') as HTMLElement;
		if (window.scrollY > element.clientHeight) {
			element.classList.add('navbar-inverse');
		} else {
			element.classList.remove('navbar-inverse');
		}
	}

	constructor(private breakpointObserver: BreakpointObserver) {}
	@ViewChild(MatAccordion) accordion?: MatAccordion;
}
