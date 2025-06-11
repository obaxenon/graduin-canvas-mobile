
import { useEffect, useRef, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const logoRef = useRef<HTMLImageElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simple CSS animation since GSAP isn't installed
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500 ${
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <img
          ref={logoRef}
          src="/lovable-uploads/47641c22-ab43-449d-9ffe-02bb30c8aed6.png"
          alt="Graduin Logo"
          className="w-32 h-auto mx-auto mb-4 animate-pulse"
        />
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto">
          <div className="h-full bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
