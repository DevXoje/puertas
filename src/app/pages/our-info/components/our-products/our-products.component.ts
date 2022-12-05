import { Component } from '@angular/core';
import { Image } from '@core/models/image';

@Component({
  selector: 'app-our-products',
  template: `
    <app-section [isLeftBigger]="true">
      <h2 id="sobre-nuestra-empresa" class="header">
        Sobre nuestros productos
      </h2>
      <figure class="right-place">
        <img
          [ngSrc]="image.path"
          [alt]="image.alt"
          [width]="image.width"
          [height]="image.height" />
      </figure>
      <div class="left-place">
        <p *ngFor="let item of content" [innerHTML]="item"></p>
      </div>
    </app-section>
  `,
})
export class OurProductsComponent {
  /* <p>En nuestra web también puede ver algunos de nuestros trabajos realizados y comprobar así la calidad de los servicios que ofrecemos y la profesionalidad que nos brinda nuestra experiencia.</p>*/
  image: Image = {
    path: 'https://puertasch.com/wp-content/uploads/2021/06/rpscdbai.jpg-sz1200x1200-1024x835.jpg',
    alt: 'algo',
    width: 297,
    height: 396,
  };

  content = [
    `Estamos especializados en la comercialización e instalación tanto para particulares como empresas. Trabajamos en <strong>Madrid</strong> y <strong>Toledo</strong> principalmente pero nos desplazamos por toda España si es necesario.`,
    `Visite nuestra exposición de puertas y armarios en <strong>Toledo</strong> sin compromiso.`,
    `En nuestra web también puede ver algunos de nuestros trabajos realizados y comprobar así la calidad de los servicios que ofrecemos y la profesionalidad que nos brinda nuestra experiencia.`,
  ];
}
