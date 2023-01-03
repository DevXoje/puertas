import { Component } from '@angular/core';
import { Image } from '@core/models/image';
import { HeaderSectionComponent } from '@shared/components/header-section/header-section.component';
import { SectionHeader } from '@core/models/Section';

@Component({
    selector: 'app-our-info',
    template: `
        <app-section [header]="header" [display]="'toLeft'">
            <figure class="left-place">
                <img
                    [ngSrc]="image.path"
                    [alt]="image.alt"
                    [width]="image.width"
                    [height]="image.height" />
            </figure>
            <div class="right-place section_content">
                <p *ngFor="let item of content" [innerHTML]="item"></p>

                <a
                    mat-fab
                    extended
                    color="primary"
                    [routerLink]="['/catalogue']"
                    class="btn"
                    >Catálogo de productos</a
                >
            </div>
        </app-section>
    `,
    styles: [
        `
            .right-place {
                padding: 3%;

                .btn {
                    margin: 0 auto;
                    background-color: #32373c;
                }
            }
        `,
    ],
})
export class OurInfoComponent {
    header: SectionHeader = {
        title: 'Sobre nuestra empresa',
    };
    image: Image = {
        path: 'https://puertasch.com/wp-content/uploads/2021/06/2021-05-25-14.05.56-768x1024.jpeg',
        alt: 'algo',
        width: 297,
        height: 396,
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
