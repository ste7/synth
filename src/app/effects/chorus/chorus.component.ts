import { Component, OnInit } from '@angular/core';
import { Chorus } from './chorus.model';

@Component({
  selector: 'app-chorus',
  templateUrl: './chorus.component.html',
  styleUrls: ['./chorus.component.css']
})
export class ChorusComponent implements OnInit {
  private chorus;

  constructor() { }

  ngOnInit() {
    this.chorus = Chorus.getInstance();
  }

  chorusFrequencyChanged(v) {
    this.chorus.frequency.value = v;
  }

  chorusDelayChanged(v) {
    console.log(this.chorus.delayTime = v);
  }

  chorusDeptChanged(v) {
    console.log(this.chorus.depth = v);
  }

}
