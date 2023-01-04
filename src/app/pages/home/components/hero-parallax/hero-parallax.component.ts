import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-parallax',
    template: `
        <mat-grid-list
            cols="1"
            rowHeight="2:1"
            class="parallax"
            style="text-align: center">
            <mat-grid-tile>
                <div>
                    <h1>Puertas CARLOS HARO APARICIO</h1>
                    <p>
                        <strong
                            >PUERTAS RÚSTICAS DE MADERA MACIZA EXTERIOR E
                            INTERIOR. SUELOS LAMINADOS, TARIMAS FLOTANTES DE
                            MADERA NATURAL, ARMARIOS EMPOTRADOS, VESTIDORES A
                            MEDIDA, VENTANAS Y MUCHO MÁS.</strong
                        >
                    </p>
                    <p>
                        <em
                            >APORTAMOS SOLUCIONES CREATIVAS PARA TU HOGAR CON LA
                            CALIDAD QUE MERECES.</em
                        >
                    </p>
                    <p>
                        <button mat-stroked-button color="primary">
                            <a
                                class="btn btn-secondary-outline btn-lg"
                                href="/catalogo-de-puertas-y-armarios/"
                                >VER NUESTRO CATÁLOGO</a
                            >
                        </button>
                    </p>
                </div>
            </mat-grid-tile>
            <!-- <mat-grid-tile>a</mat-grid-tile> -->
        </mat-grid-list>
    `,
    styles: [
        `
            .parallax {
                background-image: url('https://via.placeholder.com/150');
                background-attachment: fixed;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                margin-bottom: 100px;
            }
        `,
    ],
})
export class HeroParallaxComponent {}
