import React, { useRef, useEffect } from 'react';

function Canvas(props) {
    const canvas = useRef(null);

    useEffect(() => {
        const audioData = props.audioData;
        const height = canvas.current.height;
        const width = canvas.current.width;
        const context = canvas.current.getContext('2d');
        let x = 0;
        const sliceWidth = (width * 1.0) / audioData.length;
        const gradient = context.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop("0", "orange");
        gradient.addColorStop("0.2" ,"yellow");
        gradient.addColorStop("0.4", "green");
        gradient.addColorStop("0.6", "cyan");
        gradient.addColorStop("0.8", "blue");
        gradient.addColorStop("1.0", "violet");

        context.lineWidth = 2;
        context.strokeStyle = gradient;
        context.clearRect(0, 0, width, height);

        context.beginPath();
        context.moveTo(0, height / 2);
        for (const item of audioData) {
            const y = (item / 255.0) * height;
            context.lineTo(x, y);
            x += sliceWidth;
        }

        context.lineTo(x, height / 2);
        context.stroke();
    })

    return (
        <canvas width="750" height="300" ref={canvas} />
    )
}

export default Canvas;
