import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';
import { OscillatorComponent } from './source/oscillator/oscillator.component';

import { TutorialState } from './state/tutorial.state';
import { OscillatorState } from './state/oscillator.state';

import { RouterState } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { DelayComponent } from './effects/delay/delay.component';
import { SynthComponent } from './synth/synth.component';
import { ChorusComponent } from './effects/chorus/chorus.component';

@NgModule({
  declarations: [
    AppComponent,
    OscillatorComponent,
    CreateComponent,
    ReadComponent,
    DelayComponent,
    SynthComponent,
    ChorusComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      TutorialState,
      OscillatorState
    ]),
    FormsModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
