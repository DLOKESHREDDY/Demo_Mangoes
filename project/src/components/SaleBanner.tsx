import React from 'react';
import { X } from 'lucide-react';

const SaleBanner = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-green-600 text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-center font-medium">
          🎉 Special Sale! Up to 30% off on selected mangoes! Limited time offer! 🥭
        </p>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-green-100"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SaleBanner;