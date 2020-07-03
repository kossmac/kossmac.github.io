import React from 'react';
import metronome_logo from './metronome.svg';
import './Metronome.css';


function Metronome() {
    function BPMtoMS(bpm) {
        return 60000 / bpm;
    }

    function handleAnimationIteration(e) {
    }

    function handleBPMChange(e) {
        document.getElementById('pendel').style.animationDuration = BPMtoMS(e.target.value) + 'ms';
    }

    return (
        <div className="Metronome">
            <p>
                <img src={metronome_logo} alt="metronome" id="pendel" onAnimationIteration={handleAnimationIteration}/>
            </p>
            <input type="number" id="quantity" step="5" defaultValue={"60"} min="5" max="520" onChange={handleBPMChange}/>
        </div>
    )
}

export default Metronome;
