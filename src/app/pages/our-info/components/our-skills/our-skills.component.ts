import { Component } from '@angular/core';
import {
	faHandDots,
	faCartFlatbedSuitcase,
	faDoorClosed,
} from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-our-skills',
	templateUrl: './our-skills.component.html',
	styleUrls: ['./our-skills.component.scss'],
})
export class OurSkillsComponent {
	content = [
		{
			icon: faHandDots,
			title: 'Fabricación',
			description:
				'Fabricación de ventanas, armarios, puertas macizas, lacadas, aglomeradas	en diferentes materiales.',
		},
		{
			icon: faCartFlatbedSuitcase,
			title: 'Transporte',
			description: `Transporte Por tu comodidad te llevamos a tu destino nuestros productos en un "pis pas"`,
		},
		{
			/* <i class="fa-solid fa-cart-flatbed-suitcase"></i> */
			icon: faDoorClosed,
			title: 'Instalación',
			description:
				'Somos profesionales y expertos instaladores de nuestros propios productos para que tu no tengas que preocuparte por nada.',
		},
	];
}
