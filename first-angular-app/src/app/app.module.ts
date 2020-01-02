import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { TwoBindingComponentComponent } from './two-binding-component/two-binding-component.component';
import { BasicHightlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHightlightDirective } from './better-highlight/better-hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHightlightDirective,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    TwoBindingComponentComponent,
    BetterHightlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
