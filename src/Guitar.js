import React, { useContext, useState, useEffect } from 'react';
import "./Guitar.css";

import String from "./String";
import context from "./AudioContext";

function Guitar() {
    const { audioContext } = useContext(context);
    const [oscillator, setOscillator] = useState(undefined);

    function playSound(freq) {
        oscillator.frequency.value = freq;
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1);

        const newOscillator = audioContext.createOscillator();
        oscillator.type = 'sawtooth';
        newOscillator.connect(audioContext.destination);

        setOscillator(newOscillator);
    }

    const strings = [
        {
            name: "e2",
            frequency: "82.41"
        },
        {
            name: "a2",
            frequency: "110"
        },
        {
            name: "d3",
            frequency: "146.83"
        },
        {
            name: "g3",
            frequency: "196.00"
        },
        {
            name: "b3",
            frequency: "246.94"
        },
        {
            name: "e4",
            frequency: "329.63"
        },
    ];

    useEffect(() => {
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sawtooth';
        oscillator.connect(audioContext.destination);

        setOscillator(oscillator);
    }, [audioContext]);

    return (
        <div className="guitar">
            {strings.map(function ({ frequency }, index) {
                return <String frequency={frequency} onHover={playSound} key={index} />
            })}
        </div>
    )
}

export default Guitar;
