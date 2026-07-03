import React from 'react';

export const HeroIllustration: React.FC = () => {
  return (
    <div className="w-40 h-40 flex items-center justify-center">
      {/* Replace with your SVG or illustration */}
      <img src="/hero-illustration.png" alt="Hero Illustration" className="w-full h-full object-contain" />
    </div>
  );
}; 