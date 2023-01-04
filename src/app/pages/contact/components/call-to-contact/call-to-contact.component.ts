import { Component } from '@angular/core';
import { CONTACT_DATA } from '@core/models/static';

@Component({
    selector: 'app-call-to-contact',
    template: `
        <section class="call-to-contact">
            <h5 class="call-to-contact__content">{{ content }}</h5>
            <div class="phone">
                <h3>{{ title }}</h3>
                <p>{{ phone }}</p>
            </div>
        </section>
    `,
    styles: [
        `
            .call-to-contact {
                margin-bottom: 100px;
                &__content {
                    text-transform: uppercase;
                    text-align: center;
                    font-size: 0.9375rem;
                    font-weight: 700;
                    color: #333333;
                    line-height: 1.1;
                    margin-bottom: 15px;
                }
            }
            .phone {
                border-bottom: 4px solid currentColor;
                border-top: 4px solid currentColor;
                padding: 4em 0;
                text-align: center;
                color: #777777;
                font-size: 21px;
                h3 {
                }
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
