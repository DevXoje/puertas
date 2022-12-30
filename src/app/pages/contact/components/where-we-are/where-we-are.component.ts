import { Component } from '@angular/core';
import { SectionHeader } from '@core/models/Section';

@Component({
    selector: 'app-where-we-are',
    template: ` <app-header-section
            [header_content]="header"></app-header-section>

        <app-maps></app-maps>`,
})
export class WhereWeAreComponent {
    header: SectionHeader = {
        title: 'dónde encontrarnos',
        paragraphs: [
            'Nos puedes encontrar en Toledo , Capital de provincia y ciudad declarada Patrimonio Mundial de la Humanidad.',
            'Toledo es conocida popularmente como “Ciudad de las Tres Culturas”, por  haber convivo de forma pacífica y durante siglos, árabes, judíos y cristianos.',
        ],
    };
}
