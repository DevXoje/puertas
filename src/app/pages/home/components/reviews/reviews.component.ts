import { Component } from '@angular/core';
import { SectionHeader } from '@core/models/Section';

@Component({
    selector: 'app-reviews',
    template: `
        <app-header-section [header_content]="header"></app-header-section>
        <mat-grid-list cols="4" [gutterSize]="'30px'" [rowHeight]="340">
            <mat-grid-tile *ngFor="let item of content">
                <mat-card class="mat-elevation-z4">
                    <img
                        alt="item.alt"
                        [height]="800"
                        [ngSrc]="item.src"
                        [width]="600"
                        mat-card-image
                        priority />
                </mat-card>
            </mat-grid-tile>
        </mat-grid-list>

        <a
            [routerLink]="['catalogue/entrada']"
            class="link-to-entrada"
            color="primary"
            mat-stroked-button>
            Conocer nuestros trabajos
        </a>
    `,
    styles: [
        `
            img {
                max-width: 100%;
                max-height: 100%;
            }
        `,
    ],
    styleUrls: ['reviews.component.scss'],
})
export class ReviewsComponent {
    header: SectionHeader = {
        title: 'Nuestros últimos trabajos',
        paragraphs: [
            'Le invitamos a que nos conozca nuestra web para ver nuestro catálogo de productos que incluye una amplia variedad de puertas de exterior, puertas de interior, suelos laminados, tarimas flotantes de madera natural, armarios empotrados (frentes e interiores), vestidores a medida y ventanas.',
        ],
    };
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
