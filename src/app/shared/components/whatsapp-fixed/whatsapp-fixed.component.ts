import { Component } from '@angular/core';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
    selector: 'app-whatsapp-fixed',
    template: `
        <button
            aria-label="Button that displays a tooltip when focused or hovered over"
            mat-icon-button
            matTooltip="Escribenos y te atendemos ahora"
            matTooltipPosition="right">
            <fa-icon
                [icon]="whatsapp_icon.icon"
                [size]="whatsapp_icon.size"
                [fixedWidth]="whatsapp_icon.fixedWidth"
                [border]="true"
                pull="right"
                class="what_icon"></fa-icon>
        </button>
    `,
    styles: [
        `
            button {
                position: fixed;
                right: 0;
                bottom: 50px;
                fa-icon.what_icon ::ng-deep svg path {
                    fill: rgb(37, 211, 102);
                    background-color: white;
                }
                fa-icon.what_icon {
                    background-color: blue;
                    //color: rgb(37, 211, 102);

                    svg {
                        background-color: white;

                        path {
                            fill: #ffffff;
                            stroke: #ff0000;
                            stroke-width: 10;
                        }
                    }
                }
            }
        `,
    ],
})
export class WhatsappFixedComponent {
    whatsapp_icon = {
        icon: faWhatsappSquare,
        size: '3x' as SizeProp,
        fixedWidth: true,
        pull: 'right',
    };
}
