// Section 1
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Oscillator } from './../models/oscillator.model';
import { AddOscillator, RemoveOscillator } from './../actions/oscillator.actions';

// Section 2
export class OscillatorStateModel {
  on: boolean;
  type: string;
  frequency: number;
  volume: number;
}

// Section 3
@State<OscillatorStateModel>({
  name: 'oscillator',
  defaults: {
    on: false,
    type: 'sine',
    frequency: 1,
    volume: 1
  }
})

export class OscillatorState {
  @Selector()
  static getOscillator(state: OscillatorStateModel) {
    return state.on;
  }

  // Section 5
  // @Action(AddOscillator)
  // add({getState, patchState }: StateContext<OscillatorStateModel>, { payload }:AddOscillator) {
  //   const state = getState();
  //   patchState({
  //     oscillator: [...state.on, payload]
  //   })
  // }

  // @Action(RemoveOscillator)
  // remove({getState, patchState }: StateContext<OscillatorStateModel>, { payload }:RemoveOscillator) {
  //   patchState({
  //     oscillators: getState().oscillators.filter(a => a.type != payload)
  //   })
  // }

}
