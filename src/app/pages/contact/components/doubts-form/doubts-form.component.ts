import { Component } from '@angular/core';

@Component({
  selector: 'app-doubts-form',
  template: `
    <div class="form_doubts">
      <h2>Formulario para pequeñas dudas o sugerencias</h2>
      <p>
        Puedes solicitarnos presupuesto a través de este número de teléfono que
        te facilitamos.
      </p>
      <p>
        Preferimos el contacto mediante llamada telefónica debido a que no
        siempre estamos pendientes del correo electrónico.
      </p>
      <!--<app-contact-form></app-contact-form>-->
      <img src="" alt="algo" />
      <p>
        Siempre tenemos nuestro móvil a mano. Si no te atendemos en el momento
        es que estamos trabajando duro, no te preocupes, te llamamos nosotros en
        la mayor brevedad posible.
      </p>
    </div>
  `,
})
export class DoubtsFormComponent {}
