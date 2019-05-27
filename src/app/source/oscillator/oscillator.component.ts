import { Component, OnInit } from '@angular/core';
import { Oscillator } from './../../source/oscillator/oscillator.model';

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.css']
})
export class OscillatorComponent implements OnInit {

  private oscillator;

  private type = 'sine';

  ngOnInit() {
    this.oscillator = Oscillator.getInstance();
  }

  oscTypeChanged(e) {
    this.oscillator.type = this.type = e;
    console.log(this.oscillator);
  }

  volumeChanged(e) {
    this.oscillator.volume.value = e;
  }
}
