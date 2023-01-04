import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { MyTitleStrategy } from '@shared/template-page-title-strategy.service';

@NgModule({
    imports: [APP_ROUTES],
    exports: [RouterModule],
    providers: [MyTitleStrategy],
})
export class AppRoutingModule {}
