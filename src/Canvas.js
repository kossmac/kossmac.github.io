import React, { useRef, useEffect } from 'react';

function Canvas(props) {
    const canvas = useRef(null);

    function drawCanvas() {
        // die audiodaten (waveform)
        const audioData = props.audioData;
        // grundsätzliches zum canvas
        const height = canvas.current.height;
        const width = canvas.current.width;
        const context = canvas.current.getContext('2d');
        // wir fangen bei koordinate x=0 an zu zeichnen
        let x = 0;
        // errechnen, wieviel platz pro datensegment vorhanden ist
        const segmentWidth = width / audioData.length;
        // farbverlauf erstellen
        const gradient = context.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop("0", "orange");
        gradient.addColorStop("0.2", "yellow");
        gradient.addColorStop("0.4", "green");
        gradient.addColorStop("0.6", "cyan");
        gradient.addColorStop("0.8", "blue");
        gradient.addColorStop("1.0", "violet");

        context.lineWidth = 4;
        context.strokeStyle = gradient;
        context.clearRect(0, 0, width, height);

        context.beginPath();
        // wir zeichnen mittig der höhe
        context.moveTo(0, height / 2);

        // für jedes datensegment
        for (const item of audioData) {
            // y-wert (höhe) errechnen
            const y = (item / 255.0) * height;
            context.lineTo(x, y);
            // x um eine segmenteinheits-breite erhöhen
            x += segmentWidth;
        }

        context.lineTo(x, height / 2);
        // zeichnen
        context.stroke();
    }

    useEffect(() => {
        drawCanvas();
    })

    return <canvas width="750" height="300" ref={canvas} style={{paddingTop: '50px'}} />;
}

export default Canvas;
