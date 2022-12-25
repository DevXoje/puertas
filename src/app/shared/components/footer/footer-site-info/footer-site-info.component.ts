import { Component } from '@angular/core';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons/faAngleDoubleUp';

@Component({
    selector: 'app-footer-site-info',
    template: `
        <div class="footer__site-info">
            <div class="back-to-top__wrapper">
                <a
                    class="back-to-top"
                    href="#page"
                    mat-flat-button
                    title="Volver arriba">
                    <!--<mat-icon
                        aria-label="Side nav toggle icon"
                        class="back-to-top__icon">
                        keyboard_double_arrow_up
                    </mat-icon>-->
                    <fa-icon
                        [icon]="arrowIcon"
                        class="back-to-top__icon"></fa-icon>
                </a>
            </div>
            <p>
                <a href="https://puertasch.com/aviso-legal/">Aviso Legal</a>
                |
                <a href="https://puertasch.com/politica-de-privacidad/"
                    >Política de Privacidad</a
                >
                |
                <a href="https://puertasch.com/politica-de-cookies/"
                    >Política de cookies</a
                >
                2021 Todos los derechos reservados.
            </p>
            <p>
                Desarrollado por
                <a href="">Luque&Vilches</a>
            </p>
            <p>
                <!-- <a href="https://intelligentlife.es"
          ><img
              class="alignnone"
              style="width: 50px"
              title="Intelligent Life"
              src="https://puertasch.com/wp-content/uploads/2021/12/TamgrandeIntelligentLife.png"
              alt=""
              width="900"
              height="900"
      /></a> -->

                Copyright © 2022 Puertas CH
            </p>
        </div>
    `,
    styles: [
        `
            .footer__site-info {
                background-color: #515151;
                color: white;

                p {
                    text-align: center;
                }

                a {
                    color: white;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            .back-to-top__wrapper {
                .back-to-top {
                    border: 3px solid orange;
                    background-color: #515151;
                    border-top-right-radius: 20px;
                    color: #999999;
                    display: block;
                    height: 50px;
                    width: 50px;

                    line-height: 50px;
                    margin-left: auto;
                    right: 60px;
                    top: -15px;

                    transition: all 0.2s linear 0s;
                    transform: rotate(-45deg);

                    &__icon {
                        border: 3px solid red;
                        animation-duration: 2s;
                        animation-name: flash;
                        transform: rotate(45deg);
                    }
                }
            }
        `,
    ],
})
export class FooterSiteInfoComponent {
    arrowIcon = faAngleDoubleUp;
}
