import { Component, OnInit } from '@angular/core';
import { Chorus } from './../effects/chorus/chorus.model';
import { Delay } from './../effects/delay/delay.model';
import { Oscillator } from './../source/oscillator/oscillator.model';
import * as Tone from 'tone';

@Component({
  selector: 'app-synth',
  templateUrl: './synth.component.html',
  styleUrls: ['./synth.component.css']
})
export class SynthComponent implements OnInit {
  private osc;

  private on = false;

  private delay: Delay;

  private chorus: Chorus;

  constructor() { }

  ngOnInit() {
    let dist = new Tone.Vibrato(
      {
        depth: 5
      }
    );

    this.delay = Delay.getInstance();
    this.chorus = Chorus.getInstance();
    this.osc = Oscillator.getInstance();

    this.osc.connect(dist).connect(this.delay).connect(this.chorus);

    let _th = this;

    document.body.onkeyup = function(e){
      if(e.keyCode == 32){
        if (_th.on === true) {
          _th.on = false;
          _th.osc.stop();
        } else {
          _th.on = true;
          _th.osc.start();
        }
      }
    }
  }
}
