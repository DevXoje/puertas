import { Component } from '@angular/core';
import {
  faHandDots,
  faCartFlatbedSuitcase,
  faDoorClosed,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-our-skills',
  template: `
    <mat-grid-list cols="3" rowHeight="300px">
      <mat-grid-tile [colspan]="1" [rowspan]="1" *ngFor="let item of content">
        <mat-card appearance="outlined" class="card">
          <mat-card-header>
            <mat-card-title>
              <fa-icon [icon]="item.icon"></fa-icon>
              <h3 class="title">{{ item.title }}</h3>
            </mat-card-title>
          </mat-card-header>
          <mat-card-content
            >Fabricación de ventanas, armarios, puertas macizas, lacadas,
            aglomeradas en diferentes materiales.
          </mat-card-content>
          <mat-card-actions>
            <a href="#">
              <mat-icon>east</mat-icon>
            </a>
          </mat-card-actions>
        </mat-card>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [
    `
      .card {
        transition: all 0.25s linear;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);

        &:hover {
          box-shadow: -1px 10px 29px 0px rgba(0, 0, 0, 0.8);
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
