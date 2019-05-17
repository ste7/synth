import * as Tone from 'tone';

export class Oscillator {

    private static instance = null;

    private type = 'sine';
    
    private frequency = 220;
    
    private osc;

    private on;
  

    public static getInstance() {
        if (! this.instance) {
            this.instance = new Tone.Oscillator(220, 'sine');

            return this.instance;
        }
        return this.instance;
    }

    oscTypeChanged(e) {
        this.type = e;
        this.osc.type = this.type;
    }
    
    volumeChanged(e) {
        this.osc.volume.value = e;
    }
    
    onChanged(e) {
        this.on = e;
        this.on === true ? this.osc.start() : this.osc.stop();
    }  
}