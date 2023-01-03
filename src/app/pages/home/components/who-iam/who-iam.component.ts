import { Component } from '@angular/core';
import { SectionHeader } from '@core/models/Section';

@Component({
    selector: 'app-who-iam',
    template: `
        <app-header-section [header_content]="header"></app-header-section>
        <button mat-raised-button color="warn">
            <a href="/empresa-puertas-carlos-haro/">Sobre nuestra empresa</a>
        </button>
        <app-who-iam-services></app-who-iam-services>
    `,
    styles: [``],
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
