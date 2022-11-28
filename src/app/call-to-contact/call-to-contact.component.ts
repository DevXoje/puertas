import { Component } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-call-to-contact',
  templateUrl: './call-to-contact.component.html',
  styleUrls: ['./call-to-contact.component.scss']
})
export class CallToContactComponent {
	arrowTop=faArrowAltCircleUp
}
