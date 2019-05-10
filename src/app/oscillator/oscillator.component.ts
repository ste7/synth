import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.css']
})
export class OscillatorComponent implements OnInit {
  private osc;
  private type = 'sine';
  private frequency = 220;

  constructor() {}

  ngOnInit() {
    this.osc = new Tone.Oscillator(
      this.frequency,
      this.type
    ).toMaster();

    // this.osc.start();
  }

  oscTypeChanged(e) {
    this.type = e;
    this.osc.type = this.type;
    this.osc.volume.value = this.osc.volume.value + 1;
    console.log(this.osc);
  }
}
