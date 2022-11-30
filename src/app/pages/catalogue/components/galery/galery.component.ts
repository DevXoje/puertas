import { Component } from '@angular/core';
import { Image } from '@core/model/image';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent {
  images: Image[] = [
    { path: 'https://via.placeholder.com/150', alt: 'algo' },
    { path: 'https://via.placeholder.com/150', alt: 'algo' },
    { path: 'https://via.placeholder.com/150', alt: 'algo' },
    { path: 'https://via.placeholder.com/150', alt: 'algo' },
    { path: 'https://via.placeholder.com/150', alt: 'algo' },
    { path: 'https://via.placeholder.com/150', alt: 'algo' },
  ];
}
