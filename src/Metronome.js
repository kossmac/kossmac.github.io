import React, { useState } from 'react';

import './Metronome.css';
import metronome from './metronome.svg';
import click from './assets/click.mp3';


function Metronome() {
    const [play, setPlay] = useState(false);
    const [bpm, setBPM] = useState(60);
    const clickSound = new Audio(click);
    const [timer, setTimerID] = useState(null);

    function playSound() {
        clickSound.play();
    }

    function handlePlayButton() {
        if (play) {
            clearInterval(timer);
        } else {
            setTimerID(setInterval(playSound, 60000 / bpm));
            playSound();
        }
        setPlay(!play);
    }

    function BPMtoMS(bpm) {
        return 60000 / bpm;
    }

    function handleBPMChange(e) {
        const ms = BPMtoMS(e.target.value);

        if (play) {
            clearInterval(timer);
            setTimerID(setInterval(playSound, 60000 / bpm));
            setBPM(e.target.value);
        }
        document.getElementsByClassName('pendel')[0].style.animationDuration = ms + 'ms';
        setBPM(e.target.value);
    }

    return (
        <div className="metronome">
            <p>
                <img src={metronome} alt="metronome" className={play ? 'pendel animation' : 'pendel'} />
            </p>
                <label>Enter BPM here: </label>
                <input type="number" id="quantity" step="5" value={bpm} min="5" max="520" onChange={handleBPMChange} />
                <button onClick={handlePlayButton}>{play ? 'Stop' : 'Start'}</button>
        </div>
    )
}

export default Metronome;
