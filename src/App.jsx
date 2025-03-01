import "./App.css";
import { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    setTimeout(() => {
      if (step === 1) speakText("What is your name?");
      else if (step === 2) speakText("Which city do you live in?");
      else if (step === 3) speakText("Thank you!");
    }, 1000);
  }, [step]);

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const nextStep = () => {
    stopListening();
    if (step === 1) {
      setName(transcript.trim());
      resetTranscript();
      setStep(2);
    } else if (step === 2) {
      setCity(transcript.trim());
      resetTranscript();
      setStep(3);
    }
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    speechSynthesis.speak(utterance);
  };

  return (
    <>
      <>
        <div className="video-container">
          <video
            src="https://cdn.dribbble.com/userupload/13391587/file/original-c2fc6f1a7cd4b57bbae21a246e09c763.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </>
      <div className="container">
        <h2>
          Voice Assistant to <br /> suggest you some dishes
        </h2>
        <p>
          {step === 1
            ? "What is your name?"
            : step === 2
            ? "Which city do you live in?"
            : "Thank you!"}
        </p>
        <p>
          <strong>You:</strong> {transcript}
        </p>
        <div className="btn-style">
          <button className="button-86" onClick={startListening}>
            Start Listening
          </button>
          <button className="button-86" onClick={stopListening}>
            Stop Listening
          </button>
          <button className="button-86" onClick={resetTranscript}>
            Clear Text
          </button>
          <button
            className="button-86"
            onClick={nextStep}
            disabled={!transcript}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
