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
                toRight: display === 'toRight',
                center: display === 'center'
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

                &.center {
                    text-align: center;
                }

                &__title {
                    font-size: 40px; //2rem
                    letter-spacing: 3.5px;
                    color: #333333;
                    line-height: 1.2;
                    font-weight: 800;
                    margin-bottom: 50px;
                }

                &__subtitle {
                }

                &__paragraph {
                    margin-bottom: 0.9375rem;
                    font-size: 1.25rem;
                    font-weight: 400;
                    line-height: 1.7;
                    color: #777777;
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
