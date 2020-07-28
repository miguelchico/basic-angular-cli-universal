import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), KeyboardShortcutsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
