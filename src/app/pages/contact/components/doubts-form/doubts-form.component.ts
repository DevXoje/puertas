import { Component } from '@angular/core';
import { SectionHeader } from '@core/models/Section';
import { Image } from '@core/models/image';
import { SCHEDULE } from '@core/models/static';

@Component({
    selector: 'app-doubts-form',
    template: `
        <article class="form_doubts">
            <app-header-section
                [header_content]="header"
                [display]="'toLeft'"></app-header-section>
            <app-contact-form></app-contact-form>
            <figure>
                <img
                    [ngSrc]="image.path"
                    [width]="image.width"
                    [height]="image.height"
                    [alt]="image.alt" />
            </figure>
            <p>
                {{ footer }}
            </p>
        </article>
    `,
    styles: [
        `
            .form_doubts {
                figure {
                    width: 100%;
                    img {
                        width: 100%;
                    }
                }
            }
        `,
    ],
})
export class DoubtsFormComponent {
    header: SectionHeader = {
        title: 'formulario para pequeñas dudas o sugerencias',
        paragraphs: [
            'puedes solicitarnos presupuesto a través de este número de teléfono que te facilitamos.',
            'preferimos el contacto mediante llamada telefónica debido a que no siempre estamos pendientes del correo electrónico.',
        ],
    };
    footer =
        ' Siempre tenemos nuestro móvil a mano. Si no te atendemos en el momento es que estamos trabajando duro, no te preocupes, te llamamos nosotros en la mayor brevedad posible.';
    image: Image = SCHEDULE; /*    image: Image = {
        height: 1024,
        width: 878,
        alt: 'algo',
        path: 'https://puertasch.com/wp-content/uploads/2021/12/Horario2_-878x1024.jpg',
    };*/
}
