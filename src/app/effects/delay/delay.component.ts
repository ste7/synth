import { Component, OnInit } from '@angular/core';
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
    this.delay.delayTime.value = e;
  }

  delayFeedbackChanged(e) {
    this.delay.feedback.value = e;
  }

  delayWetChanged(e) {
    this.delay.wet.value = e;
  }
}
