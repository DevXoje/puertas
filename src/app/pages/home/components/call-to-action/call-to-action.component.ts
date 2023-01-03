import { Component } from '@angular/core';
import { CONTACT_DATA } from '@core/models/static';
import { SectionHeader } from '@core/models/Section';

@Component({
    selector: 'app-call-to-action',
    template: ` <article class="call-to-action">
        <app-header-section [header_content]="header"></app-header-section>
        <mat-grid-list class="form" cols="2">
            <mat-grid-tile class="form_content" rowspan="2">
                <app-contact-form></app-contact-form>
            </mat-grid-tile>
            <mat-grid-tile class="form_description">
                <div>
                    <p *ngFor="let item of form_content.content">
                        {{ item }}
                    </p>
                    <div>
                        <h3>{{ form_content.title }}</h3>
                        <div>
                            <button
                                aria-label="Example icon button with a delete icon"
                                color="grey"
                                mat-mini-fab>
                                <mat-icon
                                    aria-hidden="false"
                                    aria-label="Example home icon"
                                    fontIcon="call"></mat-icon>
                            </button>
                            <span>{{ phone }}</span>
                        </div>
                    </div>
                </div>
            </mat-grid-tile>
        </mat-grid-list>
    </article>`,
    styles: [
        `
            .call-to-action {
                font-size: 0.875rem;
                line-height: 1.7;
                margin-bottom: 60px;

                header {
                    text-align: center;
                    &__title {
                    }

                    &__subtitle {
                    }

                    &__description {
                        margin-top: 2.5rem;
                        word-break: break-word;
                        word-wrap: break-word;
                        margin-bottom: 0.9375rem;
                        margin-top: 0;
                    }
                }

                .form {
                    mat-grid-list {
                    }

                    &_content {
                    }

                    &_description {
                    }
                }
            }
        `,
    ],
})
export class CallToActionComponent {
    header: SectionHeader = {
        title: 'solicitar presupuestos',
        subtitle: 'preferimos el contácto personal o telefónico',
        paragraphs: [
            'Si quieres ponerte en contacto preferimos que nos contacte a través de nuestro número de móvil antes que el correo electrónico.',
        ],
    };

    form_content = {
        content: [
            `Puedes solicitarnos presupuesto a través de este número de teléfono
			que te facilitamos.`,
            `Preferimos el contacto mediante llamada telefónica debido a que no
			siempre estamos pendientes del correo electrónico.`,
            `Siempre tenemos nuestro móvil a mano. Si no te atendemos en el
			momento es que estamos trabajando duro, no te preocupes, te llamamos
			nosotros en la mayor brevedad posible.`,
        ],
        title: 'Teléfono de contácto',
    };
    phone = CONTACT_DATA.phone;
}
