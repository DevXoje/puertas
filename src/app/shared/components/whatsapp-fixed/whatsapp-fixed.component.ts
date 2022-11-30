import { Component } from '@angular/core';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-whatsapp-fixed',
  templateUrl: './whatsapp-fixed.component.html',
  styleUrls: ['./whatsapp-fixed.component.scss'],
})
export class WhatsappFixedComponent {
  whatsapp_icon = faWhatsappSquare;
}
