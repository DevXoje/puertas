import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    template: `
        <app-navbar></app-navbar>
        <main>
            <ng-content></ng-content>
        </main>
        <app-footer></app-footer>
        <app-whatsapp-fixed></app-whatsapp-fixed>
    `,
})
export class LayoutComponent {}
