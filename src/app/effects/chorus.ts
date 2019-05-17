import * as Tone from 'tone';
import * as Nexus from 'nexusui';

export class Chorus {
    constructor() {
        return new Tone.Chorus({
            frequency: 0 , // 0-3
            delayTime: 0 , //0-1
            depth: 0 , // 0-1
            spread: 180
          }).toMaster();
    }
}