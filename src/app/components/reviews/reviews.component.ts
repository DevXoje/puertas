import { Component } from '@angular/core';

@Component({
	selector: 'app-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
	content = [
		{
			src: 'https://puertasch.com/wp-content/uploads/2021/10/Puerta-interna-nogal-modelo-84003.jpeg',
			alt: 'Puerta-interna-nogal-modelo-84003',
		},
		{
			src: 'https://puertasch.com/wp-content/uploads/2021/10/Puerta-interna-mod1-pino.jpeg',
			alt: 'Puerta-interna-mod1-pino',
		},
		{
			src: 'https://puertasch.com/wp-content/uploads/2021/10/Puerta-interna-Nogal-modelo-84002.jpeg',
			alt: 'Puerta-interna-Nogal-modelo-84002',
		},
		{
			src: 'https://puertasch.com/wp-content/uploads/2021/10/Puerta-interna-nogal-modelo-84004.jpeg',
			alt: 'Puerta-interna-nogal-modelo-84004',
		},
		{
			src: 'https://puertasch.com/wp-content/uploads/2021/10/Puerta-interna-nogal-modelo-84003-1.jpeg',
			alt: 'Puerta-interna-nogal-modelo-84003-1',
		},
		{
			src: '',
			alt: '',
		},
		{
			src: '',
			alt: '',
		},
		{
			src: '',
			alt: '',
		},
		{
			src: '',
			alt: '',
		},
		{
			src: '',
			alt: '',
		},
	];
}
