import { Component } from '@angular/core';

@Component({
	selector: 'app-who-iam',
	template: `
		<app-who-iam-description
			style="text-align: center;"
		></app-who-iam-description>
		<app-who-iam-services></app-who-iam-services>
	`,
})
export class WhoIAmComponent {}
