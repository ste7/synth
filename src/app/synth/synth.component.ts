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
    this.delay = Delay.getInstance();
    this.chorus = Chorus.getInstance();
    this.osc = Oscillator.getInstance();

    this.osc.connect(this.delay).connect(this.chorus);
  }
}
