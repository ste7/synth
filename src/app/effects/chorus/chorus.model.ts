import * as Tone from 'tone';
import * as Nexus from 'nexusui';

export class Chorus {
    private static instance = null;

    public static getInstance() {
        if (! this.instance) {
            this.instance = new Tone.Chorus({
                frequency: 0 , // 0-3
                delayTime: 0 , //0-1
                depth: 0 , // 0-1
                spread: 180
            }).toMaster();

            return this.instance;
        }
        return this.instance;
    }

    


    // chorusFrequency.on('change',function(v) {
    //   _th.chorus.frequency.value = v;
    // });
    
    // chorusDelay.on('change',function(v) {
    //   _th.chorus.delayTime = v;
    // });

    // chorusDept.on('change',function(v) {
    //   _th.chorus.depth = v;
    // });

}