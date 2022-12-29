import { Component } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-contact',
    template: `
        <app-section>
            <div class="header">agf</div>
            <div class="left-place">
                <figure>
                    <img
                        alt="algo"
                        src="https://s.w.org/images/core/5.8/architecture-04.jpg"
                        style="width: 100px" />
                </figure>
            </div>
            <div class="right-place">
                <h2><strong>Contacto con Puertas Carlos Haro</strong></h2>
                <a href="">
                    ver ubicación(Scroll to map)
                    <fa-icon [icon]="arrowTop"></fa-icon>
                </a>
            </div>
        </app-section>
        <app-hero></app-hero>
        <app-call-to-contact></app-call-to-contact>
        <app-doubts-form></app-doubts-form>
        <app-where-we-are></app-where-we-are>
        <p>
            Realizamos trabajos a medida y nos desplazaos allá donde nos
            necesites. Sobre todo, nos movemos por Toledo y sus alrededores pero
            también por Madrid y zonas próximas.
        </p>
        <p>
            Si necesitas un trabajo para un destino más lejano ponte en contacto
            con nosotros y te propondremos una solución.
        </p>
        <img
            alt="algo"
            src="https://puertasch.com/wp-content/uploads/2021/11/Fachada-1024x768.jpg"
            width="80%" />

        <app-our-social-media [title]="socialMediaTitle"></app-our-social-media>
    `,
})
export class ContactComponent {
    arrowTop = faArrowAltCircleUp;

    socialMediaTitle =
        'Puedes contactarnos a través de nuestras Redes Sociales';
}
