import { Component } from '@angular/core';
import {
    faHandDots,
    faCartFlatbedSuitcase,
    faDoorClosed,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-our-skills',
    template: `
        <mat-grid-list cols="3" class="card_group">
            <mat-grid-tile
                [colspan]="1"
                [rowspan]="1"
                *ngFor="let item of content">
                <mat-card appearance="outlined" class="card">
                    <mat-card-header>
                        <mat-card-title>
                            <fa-icon
                                [icon]="item.icon"
                                class="card__icon"></fa-icon>
                            <h3 class="card__title">{{ item.title }}</h3>
                        </mat-card-title>
                    </mat-card-header>
                    <mat-card-content class="card__content"
                        >{{ item.description }}
                    </mat-card-content>
                    <mat-card-actions>
                        <button
                            class="link"
                            mat-icon-button
                            aria-label="Example icon button with a vertical three dot icon">
                            <mat-icon class="btn_icon">trending_flat</mat-icon>
                        </button>
                    </mat-card-actions>
                </mat-card>
            </mat-grid-tile>
        </mat-grid-list>
    `,
    styles: [
        `
            .card_group {
                border-bottom: 2px solid currentColor;
                margin-bottom: 50px;
            }
            .card {
                transition: all 0.25s linear;
                box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
                max-width: 400px;
                min-width: 200px;
                min-height: 300px;
                display: flex;
                justify-content: space-around;
                &:hover {
                    box-shadow: -1px 10px 29px 0px rgba(0, 0, 0, 0.8);
                    transform: translate(0, -30px);
                    .link {
                        .btn {
                            color: #faae1c;
                        }
                        color: #faae1c;
                        background-color: purple;
                    }
                }
                &__icon {
                }
                &__title {
                    font-size: 23px;
                    margin: 0 0 30px 0;
                    font-weight: bold;
                    line-height: 1.2;
                    font-size: 23px;
                }
                &__content {
                    font-size: 16px;
                    color: #333;
                    line-height: 1.7;
                }
                .link {
                    bottom: -23px;
                    left: 50px;
                    position: absolute;
                    background-color: #d2d2d2;
                    color: white;

                    .btn_icon {
                        font-weight: bolder;
                    }
                }
            }
        `,
    ],
})
export class OurSkillsComponent {
    content = [
        {
            icon: faHandDots,
            title: 'Fabricación',
            description:
                'Fabricación de ventanas, armarios, puertas macizas, lacadas, aglomeradas	en diferentes materiales.',
        },
        {
            icon: faCartFlatbedSuitcase,
            title: 'Transporte',
            description: `Transporte Por tu comodidad te llevamos a tu destino nuestros productos en un "pis pas"`,
        },
        {
            /* <i class="fa-solid fa-cart-flatbed-suitcase"></i> */
            icon: faDoorClosed,
            title: 'Instalación',
            description:
                'Somos profesionales y expertos instaladores de nuestros propios productos para que tu no tengas que preocuparte por nada.',
        },
    ];
}
