'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import ThreeQSVG from '../../public/lovable-uploads/3q.svg';
import FloatingHeader from '../components/FloatingHeader';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '../components/ui/input';
import { CafeMap } from '../components/CafeMap';
import { HeroIllustration } from '../components/HeroIllustration';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSearch = () => {
    console.log('Searching for co-working spaces in Bangkok...');
    // In a real application, this would navigate to search results
    alert('Searching for co-working spaces in Bangkok...');
  };

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-b from-white to-[#F2F2F2] overflow-hidden relative">
        {/* Sticky floating header inside hero */}
        <div className="sticky top-0 z-30 flex justify-center w-full" style={{ marginTop: 44 }}>
          <FloatingHeader />
        </div>
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
              className={`px-7 py-4 bg-[#007AFF] hover:bg-[#0051D5] border border-[#007AFF] hover:border-[#0051D5] rounded-[20px] text-white text-lg font-inter font-semibold leading-7 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm flex items-center gap-2 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ animationDelay: '600ms' }}
            >
              <SearchIcon style={{ fontSize: 20, color: 'white' }} />
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
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 relative mt-24">
        {/* Background decorative circles */}
        <div className="absolute top-[474px] right-[-138px] w-[277px] h-[265px] bg-[#F7EADD] rounded-full rotate-180 z-0" />
        <div className="absolute top-[463px] right-[54px] w-[166px] h-[160px] bg-[#FFF4EA] rounded-full rotate-180 z-0" />
        {/* Hero illustration */}
        <div className="absolute z-5 right-0 top-0">
          <HeroIllustration />
        </div>
        {/* Main content container */}
        <div className="relative z-30">
          <div className="max-w-[912px] mx-auto pt-20 px-4">
            <div className="px-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-[#F5F5FF] rounded-2xl p-1 mb-4 mix-blend-multiply">
                <div className="bg-white rounded-2xl px-3 py-1 border border-[#D7E3FE]">
                  <span className="text-[#007AFF] text-sm font-medium">Demo</span>
                </div>
                <div className="flex items-center gap-1 pr-2">
                  <span className="text-[#007AFF] text-sm font-medium">Join now for free</span>
                  <div className="w-4 h-4 flex items-center justify-center">
                    <div className="w-2 h-2 border border-[#007AFF] rotate-45 border-l-0 border-b-0" />
                  </div>
                </div>
              </div>
              {/* Main heading */}
              <div className="mb-4 relative">
                <h1 className="text-[40px] leading-[40px] font-medium text-[#101828] mb-0">
                  Explore your flow spot ?
                </h1>
                <div className="relative">
                  <h2
                    className="text-[64px] leading-[64px] font-bold text-black font-gaegu"
                    style={{ fontFamily: "'Gaegu', cursive" }}
                  >
                    Cafe&Co-work space
                  </h2>
                  {/* Blue underline accent */}
                  <div className="absolute right-0 top-8 w-16 h-16 z-10">
                    <svg width="63" height="64" viewBox="0 0 63 64" fill="none">
                      <path d="M10 50 Q30 30 50 50" stroke="#007AFF" strokeWidth="4" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Description */}
              <p className="text-[#475467] text-xl leading-[30px] mb-8 max-w-[578px]">
                Use the map to locate peaceful places perfect for focus, comfort, and long sessions.
              </p>
              {/* Search section */}
              <div className="flex items-start gap-4 mb-8">
                <div className="relative w-[300px]">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <SearchIcon className="w-4 h-4" style={{ color: '#CFD8DC' }} />
                  </div>
                  <Input
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-[42px] border-[#CFD8DC] text-[#90A4AE] placeholder:text-[#90A4AE] rounded-2xl"
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  className="h-10 px-6 bg-[#007AFF] hover:bg-[#005FCC] text-white text-xs font-bold uppercase tracking-wide rounded-2xl flex items-center gap-2"
                >
                  <SearchIcon style={{ fontSize: 18, color: 'white' }} />
                  Search
                </Button>
              </div>
            </div>
          </div>
          {/* Map section */}
          <div className="mt-8 px-4 relative z-20">
            <CafeMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
