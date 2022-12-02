import { Component, Input } from '@angular/core';
import { Image } from '@core/models/image';

@Component({
  selector: 'app-galery-cards',
  template: `
    <mat-grid-list cols="3" rowHeight="2:1">
      <mat-grid-tile *ngFor="let image of images">
        <figure>
          <figcaption>{{ image.alt }}</figcaption>

          <img
            [ngSrc]="image.path"
            [alt]="image.alt"
            [width]="image.width"
            [height]="image.height" />
          <button mat-button>
            <mat-icon>trending_flat</mat-icon>
          </button>
        </figure>
      </mat-grid-tile>
      <!-- <mat-grid-tile>a</mat-grid-tile> -->
    </mat-grid-list>
  `,
})
export class GaleryCardsComponent {
  @Input() images: Image[] = [
    {
      path: 'https://via.placeholder.com/150',
      alt: 'algo',
      height: 150,
      width: 150,
    },
    {
      path: 'https://via.placeholder.com/150',
      alt: 'algo',
      height: 150,
      width: 150,
    },
    {
      path: 'https://via.placeholder.com/150',
      alt: 'algo',
      height: 150,
      width: 150,
    },
  ];
}
