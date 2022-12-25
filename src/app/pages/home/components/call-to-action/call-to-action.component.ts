import { Component } from '@angular/core';

@Component({
    selector: 'app-call-to-action',
    template: ` <header style="text-align: center">
            <h5>Preferimos el contácto personal o telefónico</h5>
            <h2>Solicitar Presupuestos</h2>
            <p>
                Si quieres ponerte en contacto preferimos que nos contacte a
                través de nuestro número de móvil antes que el correo
                electrónico.
            </p>
        </header>
        <mat-grid-list cols="2" rowHeight="400px">
            <mat-grid-tile rowspan="2">
                <app-contact-form></app-contact-form>
            </mat-grid-tile>
            <mat-grid-tile>
                <div>
                    <p *ngFor="let item of content">
                        {{ item }}
                    </p>

                    <div>
                        <h3>Teléfono de contácto</h3>

                        <div>
                            <mat-icon
                                aria-hidden="false"
                                aria-label="Example home icon"
                                fontIcon="call"></mat-icon>

                            <div>607 95 14 49</div>
                        </div>
                    </div>
                </div>
            </mat-grid-tile>
        </mat-grid-list>`,
})
export class CallToActionComponent {
    content = [
        `Puedes solicitarnos presupuesto a través de este número de teléfono
			que te facilitamos.`,
        `Preferimos el contacto mediante llamada telefónica debido a que no
			siempre estamos pendientes del correo electrónico.`,
        `Siempre tenemos nuestro móvil a mano. Si no te atendemos en el
			momento es que estamos trabajando duro, no te preocupes, te llamamos
			nosotros en la mayor brevedad posible.`,
    ];
}
