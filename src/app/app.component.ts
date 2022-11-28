import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<!--  <app-loader></app-loader> -->
		<router-outlet></router-outlet>
		<!--<app-cookie-consent></app-cookie-consent>-->
	`,
})
export class AppComponent {
	title = 'puertas';
}
