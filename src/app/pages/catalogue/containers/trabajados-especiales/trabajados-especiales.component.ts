import { Component } from '@angular/core';
import { Catalogue_Section } from '@core/models/catalogue_section';

@Component({
    selector: 'app-trabajados-especiales',
    template: ` <h1>{{ title }}</h1>
        <app-catalogue-section
            [galleries]="[tarima, manillas]"
            [withHero]="false"
            [withCallToCall]="false"
            [withCards]="false"
            [withCallToAction]="false"></app-catalogue-section>`,
})
export class TrabajadosEspecialesComponent {
    title = 'Trabajos Especiales';
    tarima: Catalogue_Section = {
        header: {
            title: 'Tarimas flotantes',
        },
        images: [
            {
                path: 'https://via.placeholder.com/150',
                alt: 'algo',
                width: 150,
                height: 150,
            },
        ],
    };
    manillas: Catalogue_Section = {
        header: {
            title: 'Manillas y abridores',
        },
        images: [
            {
                path: 'https://via.placeholder.com/150',
                alt: 'algo',
                width: 150,
                height: 150,
            },
        ],
    };
}
