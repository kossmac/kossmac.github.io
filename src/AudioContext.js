import { createContext } from "react";

// create reusable audiocontext 

const audioContext = new AudioContext();
const context = createContext({ audioContext });

export default context;
