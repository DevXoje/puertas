import { Component, OnInit } from '@angular/core';
import { SectionHeader } from '@core/models/Section';
import { ViewportRuler } from '@angular/cdk/overlay';
import { Image } from '@core/models/image';

@Component({
    selector: 'app-reviews',
    template: `
        <article class="reviews">
            <app-header-section [header_content]="header"></app-header-section>
            <mat-grid-list
                [cols]="cols"
                [gutterSize]="'30px'"
                [rowHeight]="340">
                <mat-grid-tile *ngFor="let item of content">
                    <mat-card class="mat-elevation-z4 reviews__card">
                        <img
                            [alt]="item.alt"
                            [height]="800"
                            [ngSrc]="item.path"
                            [width]="600"
                            mat-card-image
                            priority />
                    </mat-card>
                </mat-grid-tile>
            </mat-grid-list>
            <footer>
                <a
                    [routerLink]="['catalogue/entrada']"
                    class="btn"
                    color="primary"
                    mat-stroked-button>
                    Conocer nuestros trabajos
                </a>
            </footer>
        </article>
    `,
    styles: [
        `
            .reviews {
                margin-bottom: 100px;
                &__card {
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                footer {
                    margin-top: 50px;
                    text-align: center;
                }
            }
        `,
    ],
    //styleUrls: ['reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
    cols = 0;

    constructor(private viewportRuler: ViewportRuler) {
        this.colsCheck();
    }
    header: SectionHeader = {
        title: 'Nuestros últimos trabajos',
        paragraphs: [
            'Le invitamos a que nos conozca nuestra web para ver nuestro catálogo de productos que incluye una amplia variedad de puertas de exterior, puertas de interior, suelos laminados, tarimas flotantes de madera natural, armarios empotrados (frentes e interiores), vestidores a medida y ventanas.',
        ],
    };
    sameSize = {
        width: 600,
        height: 800,
    };
    content: Image[] = [
        {
            path: 'assets/img/Puerta-interna-nogal-modelo-84003.jpeg',
            alt: 'Puerta-interna-nogal-modelo-84003',
            ...this.sameSize,
        },
        {
            path: 'assets/img/Puerta-interna-mod1-pino.jpeg',
            alt: 'Puerta-interna-mod1-pino',
            ...this.sameSize,
        },
        {
            path: 'assets/img/Puerta-interna-Nogal-modelo-84002.jpeg',
            alt: 'Puerta-interna-Nogal-modelo-84002',
            ...this.sameSize,
        },
        {
            path: 'assets/img/Puerta-interna-nogal-modelo-84004.jpeg',
            alt: 'Puerta-interna-nogal-modelo-84004',
            ...this.sameSize,
        },
        {
            path: 'assets/img/Puerta-interna-nogal-modelo-84003-1.jpeg',
            alt: 'Puerta-interna-nogal-modelo-84003-1',
            ...this.sameSize,
        },
        {
            path: 'https://via.placeholder.com/600x800',
            alt: 'algo',
            ...this.sameSize,
        },
        {
            path: 'https://via.placeholder.com/600x800',
            alt: 'algo',
            ...this.sameSize,
        },
        {
            path: 'https://via.placeholder.com/600x800',
            alt: 'algo',
            ...this.sameSize,
        },
    ];
    ngOnInit() {
        this.viewportRuler.change().subscribe(() => this.colsCheck());
    }
    colsCheck() {
        const min_items = 2;

        const width = this.viewportRuler.getViewportSize().width;
        if (width <= 600) {
            this.cols = min_items;
        } else if (width <= 960) {
            this.cols = min_items + 1;
        } else {
            this.cols = min_items + 2;
        }
    }
}
