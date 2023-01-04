import { Component, OnInit } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/overlay';

@Component({
    selector: 'app-who-iam-services',
    template: ` <mat-grid-list
        [cols]="content.length"
        [gutterSize]="'20px'"
        [rowHeight]="'700px'">
        <mat-grid-tile *ngFor="let item of content">
            <mat-card class="card">
                <img
                    [alt]="item.img.alt"
                    [height]="752"
                    [ngSrc]="item.img.src"
                    [width]="564"
                    mat-card-image
                    priority
                    class="card__image" />
                <mat-card-content>
                    <p class="card__content">
                        <strong>{{ item.text }}</strong>
                    </p>
                </mat-card-content>
            </mat-card>
        </mat-grid-tile>
    </mat-grid-list>`,
    styles: [
        `
            .card {
                margin-bottom: 150px;

                &__image {
                    /*object-fit: cover;*/
                    width: 100%;
                    height: auto;
                    vertical-align: middle;
                }

                &__content {
                    margin-top: 20px;
                    font-size: 0.875rem;
                    line-height: 1.7;
                    color: #777777;
                }
            }
        `,
    ],
})
export class WhoIAmServicesComponent implements OnInit {
    cols = 0;
    content = [
        {
            img: {
                src: 'https://puertasch.com/wp-content/uploads/2021/06/2021-05-25-14.05.56.jpeg',
                alt: 'Photo of a Shiba Inu',
            },
            text: 'Te facilitamos el montaje e instalación en nuestras Puertas de Exterior para que tengas un servicio profesional hecho de gran calidad y durabilidad.',
        },
        {
            img: {
                src: 'https://puertasch.com/wp-content/uploads/2021/06/2021-05-25-14.07.09.jpeg',
                alt: 'Photo of a Shiba Inu',
            },
            text: 'Proveemos de todo tipo de puertas para el interior de tu hogar y tu negocio. Te aportamos la elegancia que necesites y el estilo que mejor encaja.',
        },
    ];

    constructor(private viewportRuler: ViewportRuler) {
        this.colsCheck();
    }

    ngOnInit() {
        this.viewportRuler.change().subscribe(() => this.colsCheck());
    }

    colsCheck() {
        const min_items = 1;

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
