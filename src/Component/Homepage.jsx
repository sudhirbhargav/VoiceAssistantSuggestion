import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { RestaurantContext } from "./RestaurantContext";

const Homepage = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();
  const { fetchRestaurants } = useContext(RestaurantContext);
  const navigate = useNavigate();

  const cityCoordinates = {
    Mumbai: { lat: 19.076, lon: 72.8777 },
    Delhi: { lat: 28.7041, lon: 77.1025 },
    Bangalore: { lat: 12.9716, lon: 77.5946 },
    Hyderabad: { lat: 17.385, lon: 78.4867 },
    Ahmedabad: { lat: 23.0225, lon: 72.5714 },
  };

  const verifyCity = (city) => cityCoordinates[city] !== undefined;

  useEffect(() => {
    setTimeout(() => {
      if (step === 1) speakText("What is your name?");
      else if (step === 2) speakText("Which city do you live in?");
      else if (step === 3) speakText("Thank you! Processing your request.");
    }, 1000);
  }, [step]);

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const stopListening = () => SpeechRecognition.stopListening();

  const nextStep = async () => {
    stopListening();

    if (step === 1) {
      setName(transcript.trim());
      resetTranscript();
      setStep(2);
    } else if (step === 2) {
      const selectedCity = transcript.trim();
      if (!verifyCity(selectedCity)) {
        speakText(
          "Sorry, we currently operate only in Mumbai, Delhi, Bangalore, Hyderabad, and Ahmedabad."
        );
        resetTranscript();
        return;
      }

      setCity(selectedCity);
      resetTranscript();
      setStep(3);

      const { lat, lon } = cityCoordinates[selectedCity];

      await fetchRestaurants(selectedCity, lat, lon);
      setTimeout(() => {
        navigate("/restaurant");
      }, 2000);
    }
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    utterance.pitch = 1.2;
    utterance.rate = 1.0;
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices.find((voice) =>
      voice.name.includes("Google UK English Female")
    );
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="container">
      <h2>Deligo - Voice Assistant for Restaurant Recommendations</h2>
      <p>
        {step === 1
          ? "What is your name?"
          : step === 2
          ? "Which city do you live in?"
          : "Thank you! Processing your request."}
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
        <button className="button-86" onClick={nextStep} disabled={!transcript}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Homepage;
