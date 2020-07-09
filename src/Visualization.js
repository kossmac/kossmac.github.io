import React, { useState, useEffect } from 'react';
import Analyser from "./AudioAnalyse";


function Visualization() {
	const [audio, setAudio] = useState(null);

	async function getMicrophone() {
		const audio = await navigator.mediaDevices.getUserMedia({audio: true});
		setAudio(audio);
	}

	useEffect(() => {
		getMicrophone();
	}, [])

	return (
		<div className="App">
			{audio ? <Analyser audio={audio} /> : ''}
		</div>
	);
}


export default Visualization;









/*window.AudioContext = window.AudioContext;

var audioContext = new AudioContext();
var audioInput = null,
	realAudioInput = null,
	inputPoint = null
var rafID = null;
var analyserContext = null;
var canvasWidth, canvasHeight;
var recIndex = 0;

function cancelAnalyserUpdates() {
	window.cancelAnimationFrame( rafID );
	rafID = null;
}

function updateAnalysers(time) {
	if (!analyserContext) {
	var canvas = document.getElementById("analyser");
	canvasWidth = canvas.width;
	canvasHeight = canvas.height;
	analyserContext = canvas.getContext('2d');
	}

	{
	var SPACING = 3;
	var BAR_WIDTH = 1;
	var numBars = Math.round(canvasWidth / SPACING);
	var freqByteData = new Uint8Array(analyserNode.frequencyBinCount);

	analyserNode.getByteFrequencyData(freqByteData);

	analyserContext.clearRect(0, 0, canvasWidth, canvasHeight);
	analyserContext.fillStyle = '#F6D565';
	analyserContext.lineCap = 'round';
	var multiplier = analyserNode.frequencyBinCount / numBars;

	for (var i = 0; i < numBars; ++i) {
		var magnitude = 0;
		var offset = Math.floor( i * multiplier );
		// gotta sum/average the block, or we miss narrow-bandwidth spikes
		for (var j = 0; j< multiplier; j++)
		magnitude += freqByteData[offset + j];
		magnitude = magnitude / multiplier;
		var magnitude2 = freqByteData[i * multiplier];
		analyserContext.fillStyle = "hsl( " + Math.round((i*360)/numBars) + ", 100%, 50%)";
		analyserContext.fillRect(i * SPACING, canvasHeight, BAR_WIDTH, -magnitude);
	}
	}

	rafID = window.requestAnimationFrame( updateAnalysers );
}

function gotStream(stream) {
	inputPoint = audioContext.createGain();

	// Create an AudioNode from the stream.
	realAudioInput = audioContext.createMediaStreamSource(stream);
	audioInput = realAudioInput;
	audioInput.connect(inputPoint);

	analyserNode = audioContext.createAnalyser();
	analyserNode.fftSize = 2048;
	inputPoint.connect( analyserNode );

	//audioRecorder = new Recorder( inputPoint );

	zeroGain = audioContext.createGain();
	zeroGain.gain.value = 0.0;
	inputPoint.connect( zeroGain );
	zeroGain.connect( audioContext.destination );
	updateAnalysers();
} */