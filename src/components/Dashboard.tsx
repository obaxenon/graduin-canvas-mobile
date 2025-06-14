import { Search, ArrowRight, Building, BookOpen, Bed, FileText, Bot, Users, GraduationCap, Clock, ClipboardCheck, Star } from 'lucide-react';
import { useState } from 'react';
import AIAssistant from './AIAssistant';
import CareerAssessmentModal from './CareerAssessmentModal';
import ApplicationTrackingModal from './ApplicationTrackingModal';
import FullApplicationModal from './FullApplicationModal';
import PropertyModal from './PropertyModal';

interface DashboardProps {
  onPageChange: (page: string) => void;
}

const Dashboard = ({ onPageChange }: DashboardProps) => {
  const [showAI, setShowAI] = useState(false);
  const [showCareerAssessment, setShowCareerAssessment] = useState(false);
  const [showApplicationTracking, setShowApplicationTracking] = useState(false);
  const [showFullApplication, setShowFullApplication] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const actionCards = [
    { 
      id: 'career-assessment', 
      title: 'Take Assessment Test', 
      icon: ClipboardCheck,
      description: 'Discover your career path',
      isNew: true 
    },
    { 
      id: 'course-finder', 
      title: 'Course Finder', 
      icon: BookOpen,
      description: 'Find your perfect course',
      isNew: false 
    },
    { 
      id: 'institutions', 
      title: 'Universities', 
      icon: Building,
      description: 'Browse universities',
      isNew: false 
    },
    { 
      id: 'accommodation', 
      title: 'Accommodation', 
      icon: Bed,
      description: 'Find student housing',
      isNew: false 
    },
    { 
      id: 'ai-assistant', 
      title: 'AI Assistant', 
      icon: Bot,
      description: 'Get instant help',
      isNew: true 
    },
  ];

  const featuredProperties = [
    {
      id: 1,
      title: '9 Guildford Street Brixton',
      location: 'Johannesburg, 2092',
      price: 'R3,500/month',
      features: ['Furnished', 'Wi-Fi', 'Security'],
      rating: 4.2,
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      url: 'https://graduin.com/blog/2020/12/05/9-guildford-street-brixton-johannesburg-2092/',
      isPremium: true
    },
    {
      id: 2,
      title: '40A Fulham Road Brixton',
      location: 'Johannesburg, 2092',
      price: 'R2,800/month',
      features: ['Shared Kitchen', 'Study Area', 'Laundry'],
      rating: 4.5,
      image: 'bg-gradient-to-br from-green-400 to-green-600',
      url: 'https://graduin.com/blog/2020/12/05/40a-fulham-road-brixton-johannesburg-2092/',
      isPremium: true
    },
    {
      id: 3,
      title: '18 Bernard Street Sophiatown',
      location: 'Johannesburg',
      price: 'R4,200/month',
      features: ['Fully Furnished', 'Reception', '24/7 Security'],
      rating: 4.8,
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
      url: 'https://graduin.com/blog/2020/12/05/18-bernard-street-sophiatown-johannesburg/',
      isPremium: true
    },
    {
      id: 4,
      title: 'North Cliff Terrace Complex',
      location: 'Johannesburg',
      price: 'R8,300/month',
      features: ['3 Bedroom', 'Pool', 'Parking', 'Entertainment Area'],
      rating: 4.6,
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
      url: 'https://graduin.com/blog/2020/12/05/north-cliff-terrace-complex/',
      isPremium: true
    }
  ];

  const searchSuggestions = [
    { type: 'course', title: 'Computer Science', category: 'Technology' },
    { type: 'course', title: 'Medicine', category: 'Health Sciences' },
    { type: 'institution', title: 'University of Cape Town', category: 'Traditional University' },
    { type: 'institution', title: 'University of Witwatersrand', category: 'Traditional University' },
    { type: 'accommodation', title: 'Student Housing Johannesburg', category: 'Accommodation' },
    { type: 'accommodation', title: 'Cape Town Student Residence', category: 'Accommodation' },
  ];

  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    suggestion.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (id: string) => {
    if (id === 'course-finder' || id === 'institutions' || id === 'accommodation') {
      onPageChange(id);
    } else if (id === 'career-assessment') {
      setShowCareerAssessment(true);
    } else if (id === 'track') {
      setShowApplicationTracking(true);
    } else if (id === 'application') {
      setShowFullApplication(true);
    } else if (id === 'ai-assistant') {
      setShowAI(true);
    } else {
      console.log(`Selected ${id}`);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onPageChange('institutions');
    }
    setShowSearchSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: any) => {
    setSearchTerm(suggestion.title);
    setShowSearchSuggestions(false);
    if (suggestion.type === 'course') {
      onPageChange('course-finder');
    } else if (suggestion.type === 'institution') {
      onPageChange('institutions');
    } else if (suggestion.type === 'accommodation') {
      onPageChange('accommodation');
    }
  };

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property);
  };

  return (
    <div className="flex-1 md:ml-24 min-h-screen">
      {/* Main Header */}
      <div className="pt-20 md:pt-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text animate-fade-in">
          Launch Your Future - It Begins Here!
        </h1>
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8">
          <button 
            onClick={() => setShowCareerAssessment(true)}
            className="flex items-center gap-2 px-4 md:px-6 py-2 bg-green-100 text-green-700 rounded-full font-medium text-sm md:text-base"
          >
            <span>📋</span> Take Assessment
          </button>
          <button 
            onClick={() => onPageChange('course-finder')}
            className="flex items-center gap-2 px-4 md:px-6 py-2 bg-purple-100 text-purple-700 rounded-full font-medium text-sm md:text-base"
          >
            <span>🎓</span> Find Courses
          </button>
          <button 
            onClick={() => onPageChange('institutions')}
            className="flex items-center gap-2 px-3 md:px-4 py-2 text-slate-600 hover:text-purple-600 transition-colors text-sm md:text-base"
          >
            <span>🏫</span> Universities
          </button>
          <button 
            onClick={() => onPageChange('accommodation')}
            className="flex items-center gap-2 px-3 md:px-4 py-2 text-slate-600 hover:text-purple-600 transition-colors text-sm md:text-base"
          >
            <span>🏠</span> Accommodation
          </button>
          <button 
            onClick={() => setShowAI(true)}
            className="flex items-center gap-2 px-3 md:px-4 py-2 text-slate-600 hover:text-purple-600 transition-colors text-sm md:text-base"
          >
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-0.5 rounded text-xs font-bold">New</span>
            AI Assistant
          </button>
        </div>

        {/* Search Bar with Suggestions */}
        <div className="max-w-2xl mx-auto mb-12 relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search courses, universities, or accommodation..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSearchSuggestions(e.target.value.length > 0);
              }}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              onFocus={() => searchTerm.length > 0 && setShowSearchSuggestions(true)}
              className="w-full pl-12 pr-16 py-4 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button 
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <ArrowRight size={20} className="text-slate-600" />
            </button>
          </div>

          {/* Search Suggestions Dropdown */}
          {showSearchSuggestions && filteredSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-slate-200 z-50 max-h-60 overflow-y-auto">
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full px-4 py-3 text-left hover:bg-slate-50 border-b border-slate-100 last:border-b-0 transition-colors"
                >
                  <div className="font-medium text-slate-800">{suggestion.title}</div>
                  <div className="text-sm text-slate-500">{suggestion.category}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* As Featured On Section */}
      <div className="px-6 mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-slate-600 mb-6">As Featured On</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <img 
              src="/lovable-uploads/db5b84cc-61c5-4506-ac51-53592238d36e.png" 
              alt="As Featured On" 
              className="w-full max-w-4xl mx-auto h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="px-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {actionCards.map((card) => (
            <div
              key={card.id}
              className="relative group cursor-pointer"
              onClick={() => handleCardClick(card.id)}
            >
              <div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-6 card-hover">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl mb-2 md:mb-4 mx-auto flex items-center justify-center">
                  <card.icon className="text-purple-600" size={16} />
                </div>
                <h3 className="font-medium text-slate-700 text-center text-xs md:text-sm mb-1">{card.title}</h3>
                <p className="text-xs text-slate-500 text-center">{card.description}</p>
                {card.isNew && (
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    New
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Properties */}
      <div className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Featured Properties</h2>
            <button 
              onClick={() => onPageChange('accommodation')}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              View all
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <div 
                key={property.id} 
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden card-hover cursor-pointer"
                onClick={() => handlePropertyClick(property)}
              >
                <div className={`aspect-[4/3] ${property.image} flex items-center justify-center relative`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl"></div>
                  {property.isPremium && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star size={12} fill="currentColor" />
                      Premium
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-slate-800 mb-1 text-sm">{property.title}</h3>
                  <p className="text-xs text-slate-500 mb-2">{property.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-purple-600">{property.price}</span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={12} fill="currentColor" />
                      <span className="text-xs text-slate-600">{property.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showAI && <AIAssistant onClose={() => setShowAI(false)} />}
      {showCareerAssessment && <CareerAssessmentModal onClose={() => setShowCareerAssessment(false)} />}
      {showApplicationTracking && <ApplicationTrackingModal onClose={() => setShowApplicationTracking(false)} />}
      {showFullApplication && <FullApplicationModal onClose={() => setShowFullApplication(false)} />}
      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}
    </div>
  );
};

export default Dashboard;