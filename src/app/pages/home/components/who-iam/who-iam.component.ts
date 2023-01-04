import { Component } from '@angular/core';
import { SectionHeader } from '@core/models/Section';

@Component({
    selector: 'app-who-iam',
    template: `
        <section class="who-iam">
            <app-header-section [header_content]="header"></app-header-section>
            <a
                mat-raised-button
                color="warn"
                href="/empresa-puertas-carlos-haro/"
                class="btn">
                Sobre nuestra empresa
            </a>
            <app-who-iam-services></app-who-iam-services>
        </section>
    `,
    styles: [
        `
            .who-iam {
                text-align: center;
                margin-bottom: 100px;
                .btn {
                    margin: 20px 0 30px 0;
                }
            }
        `,
    ],
})
export class WhoIAmComponent {
    header: SectionHeader = {
        title: 'Servicios de calidad para tu espacio',
        paragraphs: [
            `Bienvenidos a Puertas Carlos Haro donde te ofrecemos gran variedad de
		puertas, ventanas y armarios de varios estilos.`,
            `Llevamos más de 30 años de experiencia en el sector de la madera y a la
		renovación de puertas antiguas.`,
            `Nuestro objetivo principal es satisfacer a nuestros clientes ofreciendo
		un trato y un servicio excelentes además de calidad en nuestros
		productos.`,
        ],
    };
}
