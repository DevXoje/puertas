import { Component } from '@angular/core';

@Component({
	selector: 'app-our-info',
	templateUrl: './our-info.component.html',
	styleUrls: ['./our-info.component.scss'],
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
