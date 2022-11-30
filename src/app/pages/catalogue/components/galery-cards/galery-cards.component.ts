import { Component, Input } from '@angular/core';
import { Image } from '@core/model/image';

@Component({
  selector: 'app-galery-cards',
  templateUrl: './galery-cards.component.html',
  styleUrls: ['./galery-cards.component.scss'],
})
export class GaleryCardsComponent {
  @Input() images: Image[] = [
    { path: 'https://via.placeholder.com/150', alt: 'algo' },
    { path: 'https://via.placeholder.com/150', alt: 'algo' },
    { path: 'https://via.placeholder.com/150', alt: 'algo' },
  ];
}
