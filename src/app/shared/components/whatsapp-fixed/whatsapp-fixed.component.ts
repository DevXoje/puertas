import { Component } from '@angular/core';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-whatsapp-fixed',
  template: `
    <button
      mat-raised-button
      matTooltip="Escribenos y te atendemos ahora"
      matTooltipPosition="right"
      aria-label="Button that displays a tooltip when focused or hovered over">
      <fa-icon
        [style.background-color]="'#25D366'"
        [icon]="whatsapp_icon"
        size="3x"></fa-icon>
    </button>
  `,
  styles: [
    `
      fa-icon {
        color: rgb(37, 211, 102);
      }

      button {
        position: fixed;
        right: 0;
        bottom: 50px;
      }
    `,
  ],
})
export class WhatsappFixedComponent {
  whatsapp_icon = faWhatsappSquare;
}
