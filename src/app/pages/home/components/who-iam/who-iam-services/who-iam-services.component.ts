import { Component } from '@angular/core';

@Component({
  selector: 'app-who-iam-services',
  template: ` <mat-grid-list
    (window:resize)="handleSize($event)"
    [cols]="mybreakpoint"
    rowHeight="4:0.5">
    <mat-grid-tile *ngFor="let item of content">
      <mat-card>
        <img
          [alt]="item.img.alt"
          [height]="752"
          [ngSrc]="item.img.src"
          [width]="564"
          mat-card-image
          priority />
        <mat-card-content>
          <p>
            <strong>{{ item.text }}</strong>
          </p>
        </mat-card-content>
      </mat-card>
    </mat-grid-tile>
  </mat-grid-list>`,
})
export class WhoIAmServicesComponent {
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
  mybreakpoint!: number;

  constructor() {}

  ngOnInit() {
    this.mybreakpoint = window.innerWidth <= 600 ? 1 : 6;
    console.log(this.mybreakpoint);
  }

  handleSize(event: any) {
    this.mybreakpoint = event.target.innerWidth <= 600 ? 1 : 6;
    console.log(this.mybreakpoint);
  }
}
