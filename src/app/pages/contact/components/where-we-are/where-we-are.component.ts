import { Component } from '@angular/core';

@Component({
  selector: 'app-where-we-are',
  template: `<h2>dónde encontrarnos</h2>
    <p *ngFor="let item of content">
      {{ item }}
    </p>
    <app-maps></app-maps>`,
})
export class WhereWeAreComponent {
  content = [
    'Nos puedes encontrar en Toledo , Capital de provincia y ciudad declarada Patrimonio Mundial de la Humanidad.',
    'Toledo es conocida popularmente como “Ciudad de las Tres Culturas”, por  haber convivo de forma pacífica y durante siglos, árabes, judíos y cristianos.',
  ];
}
