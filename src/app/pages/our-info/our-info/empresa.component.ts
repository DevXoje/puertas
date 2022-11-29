import { Component } from '@angular/core';

@Component({
  selector: 'app-empresa',
  template: `
    <app-breadcumbs></app-breadcumbs>
    <app-hero></app-hero>
    <app-our-info></app-our-info>
    <app-our-products></app-our-products>
    <app-our-skills></app-our-skills>
    <hr />
    <app-our-contact></app-our-contact>
    <app-our-social-media [title]="socialMediaTitle"></app-our-social-media>
  `,
})
export class EmpresaComponent {
  socialMediaTitle =
    'Nuestras redes sociales donde publicamos nuestros trabajos diarios';
}
