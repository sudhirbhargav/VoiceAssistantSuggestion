import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const nextStep = async () => {
    if (step === 1) {
      setName(transcript);
      resetTranscript();
      setStep(2);
    } else if (step === 2) {
      setCity(transcript);
      resetTranscript();
      setStep(3);
      sendDataToBackend(name, transcript);
    }
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    speechSynthesis.speak(utterance);
  };

  const sendDataToBackend = async (name, city) => {
    try {
      await fetch("https://your-backend-api.com/save-user-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, city }),
      });
    } catch (error) {
      console.error("Error sending data:", error);
      speakText("There was an error saving your information.");
    }
  };

  return (
    <div className="container">
      <h2>AI Voice Assistant (Gemini)</h2>
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
      <p>
        <strong>AI:</strong> {botResponse}
      </p>
      <div className="btn-style">
        <button onClick={startListening}>Start Listening</button>
        <button onClick={stopListening}>Stop Listening</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default App;
