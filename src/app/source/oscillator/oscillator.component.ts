import { Component, OnInit } from '@angular/core';
import { Oscillator } from './../../source/oscillator/oscillator.model';

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.css']
})
export class OscillatorComponent implements OnInit {

  private oscillator;

  private on = false;

  private type = 'sine';

  ngOnInit() {
    this.oscillator = Oscillator.getInstance();

    let _th = this;
    let wave = document.getElementsByClassName('wave-container')[0];

    document.body.onkeyup = function(e){
      if(e.keyCode == 32){
        if (_th.on === true) {
          _th.on = false;
          _th.oscillator.stop();

          wave.classList.remove('playing');
        } else {
          _th.on = true;
          _th.oscillator.start();

          wave.classList.toggle('playing');
        }
      }
    }
  }

  oscTypeChanged(e) {
    this.oscillator.type = this.type = e;
    console.log(this.oscillator);
  }

  volumeChanged(e) {
    this.oscillator.volume.value = e;
  }
}




