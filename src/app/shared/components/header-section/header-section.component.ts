import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header-section',
    template: `
        <header class="header-section">
            <h4 *ngIf="subtitle" class="header-section__subtitle">
                {{ subtitle }}
            </h4>
            <h2 class="header-section__title">{{ title }}</h2>
            <p class="header-section__paragraph">{{ paragraph }}</p>
        </header>
    `,
    styles: [
        `
            .header-section {
                &__title {
                }
                &__subtitle {
                }
                &__paragraph {
                }
            }
        `,
    ],
})
export class HeaderSectionComponent {
    @Input() title = '';
    @Input() subtitle: string | undefined;
    @Input() paragraph = '';
    content = [
        {
            src: 'https://puertasch.com/wp-content/uploads/2021/10/Puerta-interna-nogal-modelo-84003.jpeg',
            alt: 'Puerta-interna-nogal-modelo-84003',
        },
        {
            src: 'https://puertasch.com/wp-content/uploads/2021/10/Puerta-interna-mod1-pino.jpeg',
            alt: 'Puerta-interna-mod1-pino',
        },
        {
            src: 'https://puertasch.com/wp-content/uploads/2021/10/Puerta-interna-Nogal-modelo-84002.jpeg',
            alt: 'Puerta-interna-Nogal-modelo-84002',
        },
        {
            src: 'https://puertasch.com/wp-content/uploads/2021/10/Puerta-interna-nogal-modelo-84004.jpeg',
            alt: 'Puerta-interna-nogal-modelo-84004',
        },
        {
            src: 'https://puertasch.com/wp-content/uploads/2021/10/Puerta-interna-nogal-modelo-84003-1.jpeg',
            alt: 'Puerta-interna-nogal-modelo-84003-1',
        },
        {
            src: 'https://via.placeholder.com/600x800',
            alt: 'algo',
        },
        {
            src: 'https://via.placeholder.com/600x800',
            alt: 'algo',
        },
        {
            src: 'https://via.placeholder.com/600x800',
            alt: 'algo',
        },
    ];
}
