import { Component } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import { CONTACT_DATA } from '@core/models/static';

@Component({
    selector: 'app-call-to-contact',
    template: `
        <p>{{ content | uppercase }}</p>
        <div class="phone">
            <h3>{{ title }}</h3>
            <p>{{ phone }}</p>
        </div>
    `,
    styles: [
        `
            .phone {
                border-bottom: 4px solid currentColor;
                border-top: 4px solid currentColor;
                padding: 4em 0;
                text-align: center;
            }
        `,
    ],
})
export class CallToContactComponent {
    phone = CONTACT_DATA.phone;
    title = 'teléfono de contacto';
    content =
        'si quieres ponerte en contacto preferimos que nos contacte a través de nuestro numero de móvil antes que el correo electrónico.';
}
