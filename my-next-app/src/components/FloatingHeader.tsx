import React from 'react';
import { Search } from 'lucide-react';

export default function FloatingHeader() {
  return (
    <div style={{
      paddingLeft: 24, 
      paddingRight: 24, 
      paddingTop: 16, 
      paddingBottom: 16, 
      background: 'white', 
      boxShadow: '0px 4.8172197341918945px 15px rgba(0, 0, 0, 0.07)', 
      borderRadius: 24, 
      borderBottom: '1px #DDE1E6 solid', 
      justifyContent: 'flex-start', 
      alignItems: 'center', 
      gap: 24, 
      display: 'inline-flex'
    }}>
      {/* Logo */}
      <div style={{
        color: '#0F161E', 
        fontSize: 32, 
        fontFamily: 'Gaegu', 
        fontWeight: '700', 
        lineHeight: '35.20px', 
        wordWrap: 'break-word'
      }}>
        BKKsit&Co.
      </div>
      {/* Navigation Menu */}
      <div style={{
        width: 336, 
        height: 48, 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 24, 
        display: 'flex'
      }}>
        <div style={{
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          gap: 16, 
          display: 'flex'
        }}>
          {/* Home Link */}
          <div 
            data-notification="false" 
            data-sep-left="false" 
            data-sep-right="false" 
            data-show-left-icon="false" 
            data-show-right-icon="false" 
            data-size="M" 
            data-style="Link" 
            data-text="true" 
            style={{
              height: 48, 
              paddingLeft: 8, 
              paddingRight: 8, 
              paddingTop: 16, 
              paddingBottom: 16, 
              borderRadius: 40, 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: 16, 
              display: 'flex',
              cursor: 'pointer'
            }}
          >
            <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              <div style={{
                color: '#0F161E', 
                fontSize: 16, 
                fontFamily: 'Inter', 
                fontWeight: '500', 
                lineHeight: '24px', 
                wordWrap: 'break-word'
              }}>
                Home
              </div>
            </div>
          </div>
          {/* Blog Link */}
          <div 
            data-notification="false" 
            data-sep-left="false" 
            data-sep-right="false" 
            data-show-left-icon="false" 
            data-show-right-icon="false" 
            data-size="M" 
            data-style="Link" 
            data-text="true" 
            style={{
              height: 48, 
              paddingLeft: 8, 
              paddingRight: 8, 
              paddingTop: 16, 
              paddingBottom: 16, 
              borderRadius: 40, 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: 16, 
              display: 'flex',
              cursor: 'pointer'
            }}
          >
            <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              <div style={{
                color: '#0F161E', 
                fontSize: 16, 
                fontFamily: 'Inter', 
                fontWeight: '500', 
                lineHeight: '24px', 
                wordWrap: 'break-word'
              }}>
                Blog
              </div>
            </div>
          </div>
          {/* About Link */}
          <div 
            data-notification="false" 
            data-sep-left="false" 
            data-sep-right="false" 
            data-show-left-icon="false" 
            data-show-right-icon="false" 
            data-size="M" 
            data-style="Link" 
            data-text="true" 
            style={{
              height: 48, 
              paddingLeft: 8, 
              paddingRight: 8, 
              paddingTop: 16, 
              paddingBottom: 16, 
              borderRadius: 40, 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: 16, 
              display: 'flex',
              cursor: 'pointer'
            }}
          >
            <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              <div style={{
                color: '#0F161E', 
                fontSize: 16, 
                fontFamily: 'Inter', 
                fontWeight: '500', 
                lineHeight: '24px', 
                wordWrap: 'break-word'
              }}>
                About
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Button */}
      <div 
        data-icon="Leading" 
        data-size="xl" 
        style={{
          paddingLeft: 20, 
          paddingRight: 20, 
          paddingTop: 12, 
          paddingBottom: 12, 
          background: '#007AFF', 
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', 
          overflow: 'hidden', 
          borderRadius: 16, 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: 8, 
          display: 'flex',
          cursor: 'pointer'
        }}
      >
        <div style={{width: 20, height: 20, position: 'relative', overflow: 'hidden'}}>
          <Search size={16} color="white" style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }} />
        </div>
        <div style={{
          color: 'white', 
          fontSize: 16, 
          fontFamily: 'Inter', 
          fontWeight: '600', 
          lineHeight: '24px', 
          wordWrap: 'break-word'
        }}>
          Find Cafè in Bangkok
        </div>
      </div>
    </div>
  );
} 