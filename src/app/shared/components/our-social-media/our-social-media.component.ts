import { Component, Input } from '@angular/core';
import {
	faFacebook,
	faInstagram,
	faTelegram,
	faSkype,
} from '@fortawesome/free-brands-svg-icons';
@Component({
	selector: 'app-our-social-media',
	templateUrl: './our-social-media.component.html',
	styleUrls: ['./our-social-media.component.scss'],
})
export class OurSocialMediaComponent {
	icons = [
		{
			icon: faFacebook,
			color: '#4267B2',
		},
		{
			icon: faInstagram,
			color: '#E1306C',
		},
		{
			icon: faTelegram,
			color: '#229ED9',
		},
		{
			icon: faSkype,
			color: '#00aff0',
		},
	];
	@Input() title = 'Redes sociales';
}
