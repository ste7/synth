import * as Tone from 'tone';

export class Delay {
    private static instance = null;

    public static getInstance() {
        if (! this.instance) {
            this.instance = new Tone.PingPongDelay({
                delayTime: 0.5, // 0-1
                feedback: 0.5, // 0-0.95
                wet: 0.5 // 0-1
            }).toMaster();

            return this.instance;
        }
        return this.instance;
    }
}