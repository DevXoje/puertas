import { Component, Input } from '@angular/core';
import { SectionHeader } from '@core/models/Section';
import { Display } from '@core/models/Common';

@Component({
    selector: 'app-header-section',

    template: `
        <header
            class="header-section"
            [ngClass]="{
                toLeft: display === 'toLeft',
                toRight: display === 'toRight'
            }">
            <h4
                *ngIf="header_content.subtitle !== ''"
                class="header-section__subtitle">
                {{ header_content.subtitle | uppercase }}
            </h4>
            <h2 class="header-section__title">
                {{ header_content.title | uppercase }}
            </h2>
            <p
                class="header-section__paragraph"
                *ngFor="let paragraph of header_content.paragraphs"
                [innerHTML]="paragraph"></p>
        </header>
    `,
    styles: [
        `
            .header-section {
                &.toLeft {
                    position: absolute;
                    left: 0;
                }
                &.toRight {
                    position: absolute;
                    right: 0;
                }
                &__title {
                    font-size: 2rem;
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
    @Input() display?: Display = 'center';
    @Input() header_content: SectionHeader = {
        title: '',
        subtitle: '',
        paragraphs: [''],
    };
}
