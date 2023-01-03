import { Component } from '@angular/core';
import { Image } from '@core/models/image';
import { SectionHeader } from '@core/models/Section';

@Component({
    selector: 'app-our-products',
    template: `
        <app-section
            [isLeftBigger]="true"
            [header]="header"
            [display]="'toRight'">
            <figure class="right-place">
                <img
                    [ngSrc]="image.path"
                    [alt]="image.alt"
                    [width]="image.width"
                    [height]="image.height"
                    priority />
            </figure>
            <div class="left-place section_content">
                <p *ngFor="let item of content" [innerHTML]="item"></p>
            </div>
        </app-section>
    `,
})
export class OurProductsComponent {
    image: Image = {
        path: 'https://puertasch.com/wp-content/uploads/2021/06/rpscdbai.jpg-sz1200x1200-1024x835.jpg',
        alt: 'algo',
        width: 1024,
        height: 835,
    };

    header: SectionHeader = {
        title: 'Sobre nuestros productos',
    };
    content = [
        `Estamos especializados en la comercialización e instalación tanto para particulares como empresas. Trabajamos en <strong>Madrid</strong> y <strong>Toledo</strong> principalmente pero nos desplazamos por toda España si es necesario.`,
        `Visite nuestra exposición de puertas y armarios en <strong>Toledo</strong> sin compromiso.`,
        `En nuestra web también puede ver algunos de nuestros trabajos realizados y comprobar así la calidad de los servicios que ofrecemos y la profesionalidad que nos brinda nuestra experiencia.`,
    ];
}
