import React, { useState, useContext } from 'react';

import './css/Metronome.css';
import metronome from './assets/metronome.svg';

import context from "./AudioContext";


function Metronome() {
    const [play, setPlay] = useState(false);
    const [bpm, setBPM] = useState(60);
    const [timer, setTimerID] = useState(null);

    const { audioContext } = useContext(context);

    function playSound() {
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sawtooth';

        const g = audioContext.createGain()
        // limitiere erzeugten sound (verhindert störendes klicken am beginn)
        g.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 0.04)

        oscillator.connect(g)
        // oscillator -> gain -> output
        g.connect(audioContext.destination)

        oscillator.start(0)
    }

    function handlePlayButton() {
        // wenn metronom läuft
        if (play) {
            // stoppe das interval, welches den klick sound erzeugt
            clearInterval(timer);
        } else {
            // starte timer (und speicher id im state), der den klick sound abspielt und spiele initial ab
            setTimerID(setInterval(playSound, 60000 / bpm));
            playSound();
        }
        // toggle play status
        setPlay(!play);
    }

    function BPMtoMS(bpm) {
        return 60000 / bpm;
    }

    function handleBPMChange(e) {
        // rechne bpm in ms um, e.target ist die textbox
        const ms = BPMtoMS(e.target.value);
        // passe die geschwindigkeit der animation an
        document.getElementsByClassName('pendel')[0].style.animationDuration = ms + 'ms';
        // aktualisere die darstellung
        setBPM(e.target.value);
    }

    return (
        <div className="metronome">
            <p>
                <img src={metronome} alt="metronome" className={play ? 'pendel animation' : 'pendel'} />
            </p>
                <label>Enter BPM here: </label>
                <input readOnly={play} type="number" id="quantity" value={bpm} min="5" max="240" onChange={handleBPMChange} />
                <button onClick={handlePlayButton}>{play ? 'Stop' : 'Start'}</button>
        </div>
    )
}

export default Metronome;
