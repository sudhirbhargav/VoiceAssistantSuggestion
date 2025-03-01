import React from 'react';
import VoiceAssistant from './components/VoiceAssistant';
import { Utensils } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12 px-4">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <Utensils className="w-10 h-10 text-indigo-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">FoodieVoice</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your voice-activated restaurant guide. Ask for recommendations from nearby restaurants and discover the top-rated dishes.
        </p>
      </header>
      
      <main className="max-w-4xl mx-auto">
        <VoiceAssistant />
      </main>
      
      <footer className="max-w-4xl mx-auto mt-12 text-center text-gray-500 text-sm">
        <p>© 2025 FoodieVoice. All restaurant data is for demonstration purposes only.</p>
      </footer>
    </div>
  );
}

export default App;