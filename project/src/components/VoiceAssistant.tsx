import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { restaurants, Restaurant, MenuItem } from '../data/restaurants';

const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState('');
  const [suggestions, setSuggestions] = useState<MenuItem[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [speaking, setSpeaking] = useState(false);

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      processCommand(transcript);
    }
  }, [transcript]);

  const toggleListening = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    }
    setIsListening(!isListening);
  };

  const processCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    
    // Check for restaurant name mentions
    const restaurantMention = restaurants.find(restaurant => 
      lowerCommand.includes(restaurant.name.toLowerCase())
    );
    
    if (restaurantMention) {
      handleRestaurantRequest(restaurantMention);
      return;
    }
    
    // Check for cuisine type mentions
    const cuisineMention = restaurants.find(restaurant => 
      lowerCommand.includes(restaurant.cuisine.toLowerCase())
    );
    
    if (cuisineMention) {
      handleRestaurantRequest(cuisineMention);
      return;
    }
    
    // General commands
    if (lowerCommand.includes('top') || lowerCommand.includes('best') || lowerCommand.includes('recommend')) {
      if (lowerCommand.includes('nearby') || lowerCommand.includes('close') || lowerCommand.includes('nearest')) {
        // Sort restaurants by distance
        const sortedRestaurants = [...restaurants].sort((a, b) => {
          const distA = parseFloat(a.distance.split(' ')[0]);
          const distB = parseFloat(b.distance.split(' ')[0]);
          return distA - distB;
        });
        
        const nearestRestaurant = sortedRestaurants[0];
        handleRestaurantRequest(nearestRestaurant);
        return;
      }
      
      // Default to highest rated restaurant
      const highestRated = [...restaurants].sort((a, b) => b.rating - a.rating)[0];
      handleRestaurantRequest(highestRated);
      return;
    }
    
    // If no specific command is recognized
    if (lowerCommand.length > 10) {
      setMessage("I didn't quite catch that. Try asking for the top items from a specific restaurant or cuisine type.");
      speak("I didn't quite catch that. Try asking for the top items from a specific restaurant or cuisine type.");
    }
  };

  const handleRestaurantRequest = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    
    // Sort menu items by rating
    const topItems = [...restaurant.menu]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
    
    setSuggestions(topItems);
    
    const responseMessage = `Here are the top 5 items from ${restaurant.name}:`;
    setMessage(responseMessage);
    
    // Speak the response
    speak(`${responseMessage} ${topItems.map((item, index) => `${index + 1}. ${item.name}`).join('. ')}`)
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      setSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="p-6 bg-red-50 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-red-700 mb-2">Browser Support Error</h2>
        <p className="text-red-600">
          Your browser doesn't support speech recognition. 
          Please try using Chrome, Edge, or Safari.
        </p>
      </div>
    );
  }

  if (!isMicrophoneAvailable) {
    return (
      <div className="p-6 bg-yellow-50 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-yellow-700 mb-2">Microphone Access Required</h2>
        <p className="text-yellow-600">
          Please allow microphone access to use the voice assistant.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Restaurant Voice Assistant</h2>
        <div className="flex items-center space-x-4">
          {speaking && (
            <div className="flex items-center text-blue-600">
              <Volume2 className="w-5 h-5 mr-2" />
              <span>Speaking...</span>
            </div>
          )}
          <button
            onClick={toggleListening}
            className={`p-3 rounded-full ${
              isListening ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
            }`}
          >
            {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className="mb-6 p-4 bg-gray-50 rounded-lg min-h-16">
        <p className="text-gray-700">{transcript || "Try saying: 'What are the top items from Bella Italia?'"}</p>
      </div>

      {message && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-700 font-medium">{message}</p>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Top 5 Items from {selectedRestaurant?.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestions.map((item, index) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      #{index + 1}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">${item.price.toFixed(2)}</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="text-gray-700">{item.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Try asking:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>"What are the top items from Bella Italia?"</li>
          <li>"Show me the best dishes from Sushi Palace"</li>
          <li>"What's good at the nearest restaurant?"</li>
          <li>"Recommend items from Mexican cuisine"</li>
          <li>"What are the top rated vegetarian dishes?"</li>
        </ul>
      </div>
    </div>
  );
};

export default VoiceAssistant;