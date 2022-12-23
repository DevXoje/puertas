import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-site-info',
  template: `
      <div class="footer__site-info">
          <div class="back-to-top__wrapper">
              <a mat-flat-button class="back-to-top" href="#page" title="Volver arriba">
                  <mat-icon aria-label="Side nav toggle icon" class="back-to-top__icon">
                      keyboard_double_arrow_up
                  </mat-icon>
              </a>
          </div>
          <p>
              <a href="https://puertasch.com/aviso-legal/">Aviso Legal</a>
              |
              <a href="https://puertasch.com/politica-de-privacidad/">Política de Privacidad</a>
              |
              <a href="https://puertasch.com/politica-de-cookies/">Política de cookies</a>
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
          background-color: #515151;

          border-radius: 0px 20px 0 0;
          color: #999999;
          display: block;
          font-size: 30px;
          height: 50px;
          line-height: 50px;
          margin-left: auto;
          //position: absolute;
          right: 60px;
          top: -15px;
          transition: all 0.2s linear 0s;
          width: 50px;
          z-index: 99;
          transform: rotate(-45deg);

          &__icon {
            visibility: visible;
            animation-duration: 2s;
            animation-name: flash;
            transform: rotate(45deg);
            left: 30px;
            top: 5px;
          }
        }

      }
	`,
  ],
})
export class FooterSiteInfoComponent {}
