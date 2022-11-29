import { Component } from '@angular/core';

@Component({
	selector: 'app-who-iam-services',
	templateUrl: './who-iam-services.component.html',
	styleUrls: ['./who-iam-services.component.scss'],
})
export class WhoIAmServicesComponent {
	content = [
		{
			img: {
				src: 'https://puertasch.com/wp-content/uploads/2021/06/2021-05-25-14.05.56.jpeg',
				alt: 'Photo of a Shiba Inu',
			},
			text: 'Te facilitamos el montaje e instalación en nuestras Puertas de Exterior para que tengas un servicio profesional hecho de gran calidad y durabilidad.',
		},
		{
			img: {
				src: 'https://puertasch.com/wp-content/uploads/2021/06/2021-05-25-14.07.09.jpeg',
				alt: 'Photo of a Shiba Inu',
			},
			text: 'Proveemos de todo tipo de puertas para el interior de tu hogar y tu negocio. Te aportamos la elegancia que necesites y el estilo que mejor encaja.',
		},
	];
}
