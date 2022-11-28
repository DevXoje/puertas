import { Component } from '@angular/core';

@Component({
	selector: 'app-our-products',
	templateUrl: './our-products.component.html',
	styleUrls: ['./our-products.component.scss'],
})
export class OurProductsComponent {
	/* <p>En nuestra web también puede ver algunos de nuestros trabajos realizados y comprobar así la calidad de los servicios que ofrecemos y la profesionalidad que nos brinda nuestra experiencia.</p>*/
	content = [
		`Estamos especializados en la comercialización e instalación tanto para particulares como empresas. Trabajamos en <strong>Madrid</strong> y <strong>Toledo</strong> principalmente pero nos desplazamos por toda España si es necesario.`,
		`Visite nuestra exposición de puertas y armarios en <strong>Toledo</strong> sin compromiso.`,
		`En nuestra web también puede ver algunos de nuestros trabajos realizados y comprobar así la calidad de los servicios que ofrecemos y la profesionalidad que nos brinda nuestra experiencia.`,
	];
}
