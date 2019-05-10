import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { FormsModule } from '@angular/forms';
// import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppComponent } from './app.component';
import { OscillatorComponent } from './oscillator/oscillator.component';

@NgModule({
  declarations: [
    AppComponent,
    OscillatorComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule,
    FormsModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
