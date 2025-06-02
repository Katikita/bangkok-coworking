'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import ThreeQSVG from '../../public/lovable-uploads/3q.svg';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSearch = () => {
    console.log('Searching for co-working spaces in Bangkok...');
    // In a real application, this would navigate to search results
    alert('Searching for co-working spaces in Bangkok...');
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-white to-[#F2F2F2] overflow-hidden relative">
      {/* Decorative lines */}
      <div className="absolute w-full h-[3px] bg-[#F4F3F3] top-[168px] left-0" />
      <div className="absolute w-[3px] h-[1054px] bg-[#F4F3F3] right-[264px] top-0 hidden xl:block" />
      <div className="absolute w-[3px] h-[1054px] bg-[#F4F3F3] left-[264px] top-0 hidden xl:block" />
      
      <div className="w-full max-w-[1280px] px-8 mx-auto mt-[200px] md:mt-[120px] flex flex-col items-center gap-8 relative">
        <div className="flex flex-col items-center gap-9 w-full">
          <div className="w-full max-w-[1024px] flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-4 w-full">
              {/* Badge */}
              <div 
                className={`inline-flex items-center gap-3 px-[10px] py-1 bg-[#F5F5FF] rounded-2xl transition-all duration-600 ${
                  isLoaded ? 'opacity-100 translate-y-0 animate-fade-in-up' : 'opacity-0 translate-y-5'
                }`}
                style={{ animationDelay: '0ms' }}
              >
                <div className="px-[10px] py-[2px] bg-white rounded-2xl border border-[#D7E3FE] text-[#007AFF] text-sm font-inter font-medium leading-5">
                  Demo
                </div>
                <div className="text-[#007AFF] text-sm font-inter font-medium leading-5">
                  Join now for free
                </div>
              </div>
              
              {/* Main Title */}
              <div className="w-full">
                <div 
                  className={`text-center text-[#101828] text-[60px] md:text-[40px] font-inter font-semibold leading-[72px] md:leading-[48px] w-full transition-all duration-600 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ animationDelay: '150ms' }}
                >
                  Find your Co-working space in
                </div>
                <div
                  className={`flex items-center justify-center gap-2 text-center text-black text-[96px] md:text-[64px] font-gochi font-normal leading-[72px] md:leading-[48px] w-full transition-all duration-600 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ animationDelay: '300ms' }}
                >
                  Bangkok
                  <ThreeQSVG style={{ width: 60, height: 60 }} />
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div 
              className={`w-full max-w-[768px] text-center text-[#475467] text-xl md:text-lg font-inter font-normal leading-[30px] md:leading-[27px] transition-all duration-600 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ animationDelay: '450ms' }}
            >
              Find your next favorite spot to work, study, or focus — with great Wi-Fi, comfy seats, and good coffee.
            </div>
          </div>
          
          {/* CTA Button */}
          <Button
            onClick={handleSearch}
            className={`px-7 py-4 bg-[#007AFF] hover:bg-[#0051D5] border border-[#007AFF] hover:border-[#0051D5] rounded-[20px] text-white text-lg font-inter font-semibold leading-7 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ animationDelay: '600ms' }}
          >
            Find Cafè in Bangkok
          </Button>
          {/* Absolutely positioned PNG below button */}
          <div className="w-full flex justify-center absolute left-0" style={{ top: 'calc(100% + 0px)' }}>
            <img 
              src="/lovable-uploads/4445.png" 
              alt="Co-working space illustration" 
              width={960}
              height={640}
              className="object-contain"
              style={{ maxWidth: '960px', maxHeight: '640px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
