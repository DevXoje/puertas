import { Component } from '@angular/core';

@Component({
	selector: 'app-contact',
	template: `<app-layout>
<<<<<<< HEAD
		<app-breadcumbs></app-breadcumbs>
		<app-call-to-contact></app-call-to-contact>
=======
		<app-call-to-contact></app-call-to-contact>
		<app-breadcumbs></app-breadcumbs>
>>>>>>> 6f8466832a74d451039e6ccb9014ee05c0727a3c
		<app-doubts-form></app-doubts-form>
		<app-where-we-are></app-where-we-are>
		<app-our-social-media [title]="socialMediaTitle"></app-our-social-media>
	</app-layout>`,
})
export class ContactComponent {
	socialMediaTitle =
		'Puedes contactarnos a través de nuestras Redes Sociales';
}
