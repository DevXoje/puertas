import { Component } from '@angular/core';
import { Image } from '@core/models/image';

@Component({
  selector: 'app-our-info',
  template: `<h2 id="sobre-nuestra-empresa">Sobre nuestra empresa</h2>

    <figure>
      <img
        [ngSrc]="img.path"
        [alt]="img.alt"
        [width]="img.width"
        [height]="img.height" />
    </figure>

    <p *ngFor="let item of content" [innerHTML]="item"></p>
    <a mat-raised-button color="primary" [routerLink]="['/catalogue']"
      >Catálogo de productos</a
    > `,
})
export class OurInfoComponent {
  img: Image = {
    alt: '',
    height: 396,
    width: 297,
    path: 'https://puertasch.com/wp-content/uploads/2021/06/2021-05-25-14.05.56-768x1024.jpeg',
  };
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
