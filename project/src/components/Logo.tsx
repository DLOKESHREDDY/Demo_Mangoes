import React from 'react';
import { Tangent as Mango } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Mango className="w-8 h-8 text-green-600" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
      </div>
      <div className="font-bold text-xl">
        <span className="text-green-600">Ullavapadu</span>
        <span className="text-yellow-600">Mangoes</span>
      </div>
    </div>
  );
};

export default Logo;