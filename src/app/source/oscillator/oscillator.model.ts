import * as Tone from 'tone';

export class Oscillator {
  private static instance = null;

  public static getInstance() {
    if (! this.instance) {
      this.instance = new Tone.Oscillator(220, 'sine');

      return this.instance;
    }
    return this.instance;
  }
}
