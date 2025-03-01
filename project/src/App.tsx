import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VoiceAssistant from './components/VoiceAssistant';
import ItemDetails from './components/ItemDetails';
import Header from './components/Header';
import { UserLocationProvider } from './context/UserLocationContext';

function App() {
  return (
    <UserLocationProvider>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12 px-4">
        <Header />
        
        <main className="max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<VoiceAssistant />} />
            <Route path="/item/:restaurantId/:itemId" element={<ItemDetails />} />
          </Routes>
        </main>
        
        <footer className="max-w-4xl mx-auto mt-12 text-center text-gray-500 text-sm">
          <p>© 2025 FoodieVoice. All restaurant data is for demonstration purposes only.</p>
        </footer>
      </div>
    </UserLocationProvider>
  );
}

export default App;