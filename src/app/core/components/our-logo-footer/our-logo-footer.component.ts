import { Component } from '@angular/core';
import { Link } from '@core/models/Link';

@Component({
    selector: 'app-our-logo-footer',
    template: `<p>
        Desarrollado por
        <a href="{{ ourLink.path }}">{{ ourLink.text }}</a>
    </p>`,
    styles: [``],
})
export class OurLogoFooterComponent {
    ourLink: Link = {
        text: 'Luque&Vilches',
        path: 'nuestra pagina',
    };
}
