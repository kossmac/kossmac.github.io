import React, { Component } from 'react';
import Canvas from './Canvas';

class AudioAnalyse extends Component {
  constructor(props) {
    super(props);
    this.state = { audioData: new Uint8Array(0) };
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    // wir benötigen immer einen audiocontext
    this.audioContext = new window.AudioContext();
    // mit dem audiocontext erzeugnén wir einen audio analyser
    this.analyser = this.audioContext.createAnalyser();
    // datenstruktur zum erfassen der audiodaten
    this.audioArray = new Uint8Array(this.analyser.frequencyBinCount);
    // erstellt MediaStreamSource Objekt anhand des zuvor übergebenen Mikrofons
    this.input = this.audioContext.createMediaStreamSource(this.props.audio);
    // Inputsignal verbinden mit dem AnalyserNode
    this.input.connect(this.analyser);
    // zeichnung vom browser anfordern
    this.aniID = requestAnimationFrame(this.animate);
  }

  animate() {
    // kopieren der aktuellen waveform in die zuvor erzeugte datenstruktur
    this.analyser.getByteTimeDomainData(this.audioArray);
    this.setState({ audioData: this.audioArray });
    this.aniID = requestAnimationFrame(this.animate);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.aniID);
    this.analyser.disconnect();
    this.input.disconnect();
  }

  render() {
    return <Canvas audioData={this.state.audioData} />;
  }
}

export default AudioAnalyse;
