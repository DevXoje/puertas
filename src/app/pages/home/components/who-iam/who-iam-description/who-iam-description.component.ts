import { Component } from '@angular/core';

@Component({
	selector: 'app-who-iam-description',
	templateUrl: './who-iam-description.component.html',
	styleUrls: ['./who-iam-description.component.scss'],
})
export class WhoIAmDescriptionComponent {
	content = [
		`Bienvenidos a Puertas Carlos Haro donde te ofrecemos gran variedad de
		puertas, ventanas y armarios de varios estilos.`,
		`Llevamos más de 30 años de experiencia en el sector de la madera y a la
		renovación de puertas antiguas.`,
		`Nuestro objetivo principal es satisfacer a nuestros clientes ofreciendo
		un trato y un servicio excelentes además de calidad en nuestros
		productos.`,
	];
}
