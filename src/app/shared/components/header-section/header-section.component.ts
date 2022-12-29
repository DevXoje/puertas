import { Component, Input } from '@angular/core';
import { SectionHeader } from '@core/models/Section';

@Component({
    selector: 'app-header-section',
    template: `
        <header class="header-section">
            <h4
                *ngIf="header_content.subtitle !== ''"
                class="header-section__subtitle">
                {{ header_content.subtitle | uppercase }}
            </h4>
            <h2 class="header-section__title">
                {{ header_content.title | uppercase }}
            </h2>
            <p class="header-section__paragraph">
                {{ header_content.paragraph }}
            </p>
        </header>
    `,
    styles: [
        `
            .header-section {
                &__title {
                }

                &__subtitle {
                }

                &__paragraph {
                }
            }
        `,
    ],
})
export class HeaderSectionComponent {
    @Input() header_content: SectionHeader = {
        title: '',
        subtitle: '',
        paragraph: '',
    };
}
