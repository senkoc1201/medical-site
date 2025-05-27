import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

interface AnimatedCheckboxProps {
  text: string;
  delay: number;
}

const AnimatedCheckbox: React.FC<AnimatedCheckboxProps> = ({ text, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`flex items-center transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className={`
        flex-shrink-0 h-6 w-6 rounded-md border-2 mr-3 flex items-center justify-center
        ${isVisible ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white'}
        transition-all duration-300
      `}>
        <Check 
          className={`text-white transform transition-all duration-300 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`} 
          size={16} 
        />
      </div>
      <span className="text-lg text-gray-800">{text}</span>
    </div>
  );
};

export default AnimatedCheckbox;