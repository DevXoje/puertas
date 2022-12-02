import { Component } from '@angular/core';

@Component({
  selector: 'app-our-contact',
  template: `<p>
      Si busca algo y no lo encuentra, no lo dude, póngase en contacto con
      nosotros porque también hacemos trabajos a medida.
    </p>
    <figure class="aligncenter size-large is-resized">
      <img
        decoding="async"
        loading="lazy"
        src="https://puertasch.com/wp-content/uploads/2021/12/Horario2_-878x1024.jpg"
        alt=""
        class="wp-image-437"
        width="370"
        height="431"
        srcset="
          https://puertasch.com/wp-content/uploads/2021/12/Horario2_-878x1024.jpg   878w,
          https://puertasch.com/wp-content/uploads/2021/12/Horario2_-257x300.jpg    257w,
          https://puertasch.com/wp-content/uploads/2021/12/Horario2_-768x896.jpg    768w,
          https://puertasch.com/wp-content/uploads/2021/12/Horario2_-1317x1536.jpg 1317w,
          https://puertasch.com/wp-content/uploads/2021/12/Horario2_.jpg           1425w
        "
        sizes="(max-width: 370px) 100vw, 370px" />
    </figure>
    <p>
      En cualquier caso, le recomendamos que contacte con nosotros para así
      poderle brindar un trato personalizado. Puede hacerlo a través de nuestro
      contacto o directamente en:
    </p>

    <hr />
    <blockquote>telefono de contacto 607 85 14 49</blockquote>
    <button mat-button>contacto</button> `,
})
export class OurContactComponent {}
