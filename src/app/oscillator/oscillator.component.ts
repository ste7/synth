import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import * as Nexus from 'nexusui';
import { Chorus } from './../effects/chorus';
import { Delay } from './../effects/delay';

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.css']
})
export class OscillatorComponent implements OnInit {
  private osc;
  private on = false;
  private type = 'sine';
  private frequency = 220;
  private volume = -25;
  private hightFilter = 0;
  private delay;
  private chorus;

  constructor() {}

  ngOnInit() {
    // var reverb = new Tone.Reverb({
    //   decay  : 0 ,
    //   preDelay  : 0,
    //   wet: 0
    // }).toMaster();

    // this.chorus = new Chorus();
    // this.delay = new Delay();


    // this.osc = new Tone.Oscillator(this.frequency, this.type).connect(this.chorus).connect(this.delay);
    // this.osc.volume.value = this.volume;


    // var piano = new Nexus.Piano('#piano',{
    //   'size': [500,125],
    //   'mode': 'button',  // 'button', 'toggle', or 'impulse'
    //   'lowNote': 224,
    //   'highNote': 260,
    //   'note': 'on'
    // })

    // piano.on('change',function(v) {
    //   console.log(v);
    //   _th.osc.frequency.value = v.note
    //   v.state === true ? _th.osc.start() : _th.osc.stop();
    // });
  };


  oscTypeChanged(e) {
    this.type = e;
    this.osc.type = this.type;
  }

  onChanged(e) {
    this.on = e;
    this.on === true ? this.osc.start() : this.osc.stop();
    console.log(this.osc);
  }

  volumeChanged(e) {
    this.osc.volume.value = e;
  }
}
