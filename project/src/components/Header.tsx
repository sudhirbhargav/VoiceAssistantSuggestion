import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="max-w-4xl mx-auto mb-8 text-center">
      <Link to="/" className="inline-block">
        <div className="flex items-center justify-center mb-4">
          <Utensils className="w-10 h-10 text-indigo-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">FoodieVoice</h1>
        </div>
      </Link>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Your voice-activated restaurant guide. Ask for recommendations from nearby restaurants and discover the top-rated dishes.
      </p>
    </header>
  );
};

export default Header;