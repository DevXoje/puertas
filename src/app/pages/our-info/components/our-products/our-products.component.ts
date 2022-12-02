import { Component } from '@angular/core';

@Component({
  selector: 'app-our-products',
  template: `<h2 id="sobre-nuestra-empresa">Sobre nuestra empresa</h2>

    <p *ngFor="let item of content" [innerHTML]="item"></p>

    <figure class="alignleft size-large is-resized">
      <img
        decoding="async"
        loading="lazy"
        src="https://puertasch.com/wp-content/uploads/2021/06/2021-05-25-14.05.56-768x1024.jpeg"
        alt=""
        class="wp-image-85"
        width="297"
        height="396"
        srcset="
          https://puertasch.com/wp-content/uploads/2021/06/2021-05-25-14.05.56-768x1024.jpeg  768w,
          https://puertasch.com/wp-content/uploads/2021/06/2021-05-25-14.05.56-225x300.jpeg   225w,
          https://puertasch.com/wp-content/uploads/2021/06/2021-05-25-14.05.56.jpeg          1128w
        "
        sizes="(max-width: 297px) 100vw, 297px" />
    </figure> `,
})
export class OurProductsComponent {
  /* <p>En nuestra web también puede ver algunos de nuestros trabajos realizados y comprobar así la calidad de los servicios que ofrecemos y la profesionalidad que nos brinda nuestra experiencia.</p>*/
  content = [
    `Estamos especializados en la comercialización e instalación tanto para particulares como empresas. Trabajamos en <strong>Madrid</strong> y <strong>Toledo</strong> principalmente pero nos desplazamos por toda España si es necesario.`,
    `Visite nuestra exposición de puertas y armarios en <strong>Toledo</strong> sin compromiso.`,
    `En nuestra web también puede ver algunos de nuestros trabajos realizados y comprobar así la calidad de los servicios que ofrecemos y la profesionalidad que nos brinda nuestra experiencia.`,
  ];
}
