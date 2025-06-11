
import { useState } from 'react';
import { Menu, X, Home, Users, Building, Phone, Search, GraduationCap, Bed } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Users },
    { id: 'how-it-works', label: 'How It Works', icon: GraduationCap },
    { id: 'institutions', label: 'Institutions', icon: Building },
    { id: 'course-finder', label: 'Course Finder', icon: Search },
    { id: 'accommodation', label: 'Accommodation', icon: Bed },
    { id: 'contact', label: 'Contact Us', icon: Phone },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-full w-20 bg-white/80 backdrop-blur-md border-r border-slate-200 flex-col items-center py-6 z-50">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/b91853a2-3b15-4994-9915-01804d67b62e.png" 
            alt="Graduin Logo" 
            className="w-8 h-8"
          />
        </div>
        
        <nav className="flex flex-col gap-3 w-full px-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`flex flex-col items-center px-3 py-3 rounded-xl text-slate-600 hover:text-purple-600 hover:bg-white/70 transition-all duration-200 ${
                currentPage === item.id ? 'text-purple-600 bg-white shadow-sm' : ''
              }`}
              title={item.label}
            >
              <item.icon size={20} />
              <span className="text-xs mt-1 text-center leading-tight">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/b91853a2-3b15-4994-9915-01804d67b62e.png" 
            alt="Graduin Logo" 
            className="w-8 h-8"
          />
          <span className="font-bold text-xl gradient-text">Graduin</span>
        </div>
        
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-slate-100 rounded-lg"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 p-4 z-40 max-h-96 overflow-y-auto">
          <nav className="grid grid-cols-2 gap-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex flex-col items-center p-3 rounded-xl text-slate-600 hover:text-purple-600 hover:bg-slate-50 transition-all duration-200 ${
                  currentPage === item.id ? 'text-purple-600 bg-white shadow-sm' : ''
                }`}
              >
                <item.icon size={20} />
                <span className="text-xs mt-1 text-center">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
