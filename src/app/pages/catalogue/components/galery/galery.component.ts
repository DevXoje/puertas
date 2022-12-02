import { Component } from '@angular/core';
import { Image } from '@core/models/image';

@Component({
  selector: 'app-galery',
  template: `<!-- TODO: titulo y galeria salen invertidos-->
    <ng-content></ng-content>
    <mat-grid-list cols="3" rowHeight="2:1">
      <mat-grid-tile *ngFor="let image of images">
        <figure>
          <img
            [ngSrc]="image.path"
            [alt]="image.alt"
            [width]="image.width"
            [height]="image.height" />
        </figure>
      </mat-grid-tile>
    </mat-grid-list> `,
})
export class GaleryComponent {
  images: Image[] = [
    {
      path: 'https://via.placeholder.com/150',
      alt: 'algo',
      width: 150,
      height: 150,
    },
    {
      path: 'https://via.placeholder.com/150',
      alt: 'algo',
      width: 150,
      height: 150,
    },
    {
      path: 'https://via.placeholder.com/150',
      alt: 'algo',
      width: 150,
      height: 150,
    },
    {
      path: 'https://via.placeholder.com/150',
      alt: 'algo',
      width: 150,
      height: 150,
    },
    {
      path: 'https://via.placeholder.com/150',
      alt: 'algo',
      width: 150,
      height: 150,
    },
    {
      path: 'https://via.placeholder.com/150',
      alt: 'algo',
      width: 150,
      height: 150,
    },
  ];
}
