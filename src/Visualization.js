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
