import * as Tone from 'tone';
import * as Nexus from 'nexusui';

export class Delay {
    constructor() {
        return new Tone.PingPongDelay({
            delayTime: 0, // 0-1
            feedback: 0, // 0-0.95
            wet: 0 // 0-1
        }).toMaster();
    }
}