import { Component } from '@angular/core';

@Component({
  selector: 'app-our-info',
  template: `<h2 id="sobre-nuestra-empresa">Sobre nuestra empresa</h2>

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
    </figure>

    <p *ngFor="let item of content" [innerHTML]="item"></p>

    <button mat-raised-button color="primary">
      <a
        class="wp-block-button__link"
        href="https://puertasch.com/catalogo-de-puertas-y-armarios/"
        >Catálogo de productos</a
      >
    </button> `,
})
export class OurInfoComponent {
  content = [
    `Te damos la bienvenida a nuestra web donde podrás encontrar todo lo que
		buscas.`,
    `En Puertas Carlos Haro Aparicio nos dedicamos desde hace más de 30 años al
		sector de la madera y a la <strong>renovación de puertas antiguas</strong>.`,
    `Nuestro principal objetivo es satisfacer a nuestros clientes ofreciendo un
		trato y un servicio excelentes además de calidad e innovación en nuestros
		productos.&nbsp;`,
    `Le invitamos a que nos conozca un poco más&nbsp;y&nbsp;navegue por nuestra
		web para ver nuestro catálogo de productos que incluye&nbsp;una amplia
		variedad de <strong>puertas de exterior</strong>,
		<strong>puertas de interior</strong>, <strong>suelos laminados</strong>,
		<strong>tarimas flotantes</strong> de madera natural,
		<strong>armarios</strong> empotrados (frentes e interiores),
		<strong>vestidores</strong> a medida y <strong>ventanas</strong>.&nbsp;
	`,
  ];
}
