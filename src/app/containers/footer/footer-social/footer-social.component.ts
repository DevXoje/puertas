import { Component } from '@angular/core';
import {
	faFacebook,
	faInstagram,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-footer-social',
	templateUrl: './footer-social.component.html',
	styleUrls: ['./footer-social.component.scss'],
})
export class FooterSocialComponent {
	faCoffee = faCoffee;
	socialMedias = [
		{
			name: 'facebook',
			link: 'https://www.facebook.com/carlos.h.aparicio.3',
			icon: faFacebook,
		},
		{
			name: 'instagram',
			link: 'https://www.facebook.com/carlos.h.aparicio.3',
			icon: faInstagram,
		},
		{
			name: 'whatsapp',
			link: 'https://www.facebook.com/carlos.h.aparicio.3',
			icon: faWhatsapp,
		},
	];
}
