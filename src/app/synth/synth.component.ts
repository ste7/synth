import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import * as Nexus from 'nexusui';
import { Chorus } from './../effects/chorus/chorus.model';
import { Delay } from './../effects/delay/delay.model';


@Component({
  selector: 'app-synth',
  templateUrl: './synth.component.html',
  styleUrls: ['./synth.component.css']
})
export class SynthComponent implements OnInit {
  private osc;
  private on = false;
  private type = 'sine';
  private frequency = 220;
  private volume = -25;

  private delay: Delay;

  private chorus: Chorus;

  constructor() { }

  ngOnInit() {
    this.delay = Delay.getInstance();
    this.chorus = Chorus.getInstance();

    this.osc = new Tone.Oscillator(this.frequency, this.type).connect(this.delay).connect(this.chorus);
    this.osc.volume.value = this.volume;

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

  // oscTypeChanged(e) {
  //   this.type = e;
  //   this.osc.type = this.type;
  // }

  // onChanged(e) {
  //   this.on = e;
  //   this.on === true ? this.osc.start() : this.osc.stop();
  // }

  // volumeChanged(e) {
  //   this.osc.volume.value = e;
  // }

}
