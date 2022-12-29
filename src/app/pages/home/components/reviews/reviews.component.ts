import { Component } from '@angular/core';

@Component({
    selector: 'app-reviews',
    template: `
        <header>
            <h2>Nuestros últimos trabajos</h2>
            <p>
                Le invitamos a que nos conozca nuestra web para ver nuestro
                catálogo de productos que incluye una amplia variedad de puertas
                de exterior, puertas de interior, suelos laminados, tarimas
                flotantes de madera natural, armarios empotrados (frentes e
                interiores), vestidores a medida y ventanas.
            </p>
        </header>
        <mat-grid-list cols="4" rowHeight="800px">
            <mat-grid-tile *ngFor="let item of content">
                <mat-card class="mat-elevation-z4">
                    <img
                        mat-card-image
                        [ngSrc]="item.src"
                        [alt]="item.alt"
                        [width]="600"
                        [height]="800"
                        priority />
                </mat-card>
            </mat-grid-tile>
        </mat-grid-list>
        <a
            [routerLink]="['catalogue/entrada']"
            mat-stroked-button
            color="primary"
            class="link-to-entrada">
            Conocer nuestros trabajos
        </a>
    `,
    styles: [
        `
            .link-to-entrada {
                &:hover {
                    background-color: greenyellow;
                }
            }
        `,
    ],
})
export class ReviewsComponent {
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
