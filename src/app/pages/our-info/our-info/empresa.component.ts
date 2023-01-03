import { Component } from '@angular/core';

@Component({
    selector: 'app-empresa',
    template: `
        <app-hero></app-hero>
        <app-our-info></app-our-info>
        <app-our-products></app-our-products>
        <app-our-skills></app-our-skills>
        <app-our-contact></app-our-contact>
        <app-our-social-media
            [title]="socialMediaTitle"
            [hasIconsLarge]="true"></app-our-social-media>
    `,
})
export class EmpresaComponent {
    socialMediaTitle =
        'Nuestras redes sociales donde publicamos nuestros trabajos diarios';
}
