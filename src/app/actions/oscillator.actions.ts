import { Oscillator } from './../models/oscillator.model';

export class AddOscillator {
  static readonly type = '[OSCILLATOR] Add';

  constructor(public payload: Oscillator) { }
}

export class RemoveOscillator {
  static readonly type = '[OSCILLATOR] Remove';

  constructor(public payload: string) { }
}
