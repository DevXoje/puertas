import { Component } from '@angular/core';
import { Image } from '@core/models/image';
import { CONTACT_DATA } from '@core/models/static';
import { Link } from '@core/models/Link';

@Component({
    selector: 'app-our-contact',
    template: `
        <section class="our_contact">
            <p>{{ content[0] }}</p>
            <figure>
                <img
                    [ngSrc]="image.path"
                    [alt]="image.alt"
                    [width]="image.width"
                    [height]="image.height" />
            </figure>
            <p>{{ content[1] }}</p>
            <hr />
            <blockquote class="blockquote">
                <p>{{ phone.title }}</p>
                <p>{{ phone.number }}</p>
            </blockquote>
            <a mat-fab extended [routerLink]="[contact.path]" class="btn">{{
                contact.text | titlecase
            }}</a>
        </section>
    `,
    styles: [
        `
            .our_contact {
                margin-bottom: 50px;
                text-align: center;

                .blockquote {
                    font-size: 1.4em;
                    margin: 50px auto;
                    //font-family:Open Sans;
                    font-style: italic;
                    color: #999999;
                    padding: 1.2em 30px;
                    border-left: 3px solid #03c4eb;
                    line-height: 1;
                    position: relative;
                    background: #ededed;
                    text-align: left;
                }
                .btn {
                    background-color: #32373c;
                }
            }
            p {
                font-size: 0.875rem;
                line-height: 1.7;
                color: #777777;
            }
            figure {
                img {
                    display: block;
                    margin: 0 auto;
                }
            }
        `,
    ],
})
export class OurContactComponent {
    content = [
        'Si busca algo y no lo encuentra, no lo dude, póngase en contacto con nosotros porque también hacemos trabajos a medida.',
        'En cualquier caso, le recomendamos que contacte con nosotros para así poderle brindar un trato personalizado. Puede hacerlo a través de nuestro contacto o directamente en:',
    ];
    phone = {
        title: 'telefono de contacto',
        number: CONTACT_DATA.phone,
    };
    contact: Link = {
        path: '/contact',
        text: 'contacto',
    };
    image: Image = {
        path: 'https://puertasch.com/wp-content/uploads/2021/12/Horario2_-878x1024.jpg',
        alt: 'algo',
        height: 431,
        width: 370,
    };
}
