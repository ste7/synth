import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import * as Nexus from 'nexusui';
import { Delay } from './delay.model';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.css']
})
export class DelayComponent implements OnInit {
  public delay;

  constructor() { }

  ngOnInit() {
    this.delay = Delay.getInstance();
  }

  delayTimeChanged(e) {
    console.log(this.delay.delayTime.value = e);
    console.log(this.delay);
  }

  delayFeedbackChanged(e) {
    this.delay.feedback.value = e;
  }

  delayWetChanged(e) {
    this.delay.wet.value = e;
  }
}
