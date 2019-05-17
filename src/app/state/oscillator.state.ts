// Section 1
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Oscillator } from './../models/oscillator.model';
import { AddOscillator, RemoveOscillator } from './../actions/oscillator.actions';

// Section 2
export class OscillatorStateModel {
  oscillators: Oscillator[]
}

// Section 3
@State<OscillatorStateModel>({
  name: 'oscillators',
  defaults: {
    oscillators: []
  }
})

export class OscillatorState {
  @Selector()
  static getOscillator(state: OscillatorStateModel) {
    return state.oscillators;
  }

  // Section 5
  @Action(AddOscillator)
  add({getState, patchState }: StateContext<OscillatorStateModel>, { payload }:AddOscillator) {
    const state = getState();
    patchState({
      oscillators: [...state.oscillators, payload]
    })
  }

  // @Action(RemoveOscillator)
  // remove({getState, patchState }: StateContext<OscillatorStateModel>, { payload }:RemoveOscillator) {
  //   patchState({
  //     oscillators: getState().oscillators.filter(a => a.type != payload)
  //   })
  // }

}
