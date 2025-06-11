
import { Search, ArrowRight, Building, BookOpen, Bed, FileText, Bot, Users, GraduationCap, Clock } from 'lucide-react';
import { useState } from 'react';
import AIAssistant from './AIAssistant';

interface DashboardProps {
  onPageChange: (page: string) => void;
}

const Dashboard = ({ onPageChange }: DashboardProps) => {
  const [showAI, setShowAI] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const actionCards = [
    { 
      id: 'course-finder', 
      title: 'Course Finder', 
      icon: BookOpen,
      description: 'Find your perfect course',
      isNew: false 
    },
    { 
      id: 'institutions', 
      title: 'Institutions', 
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
      id: 'application', 
      title: 'Apply Now', 
      icon: FileText,
      description: 'Start your application',
      isNew: true 
    },
    { 
      id: 'track', 
      title: 'Track Application', 
      icon: Clock,
      description: 'Monitor progress',
      isNew: false 
    },
    { 
      id: 'profile', 
      title: 'My Profile', 
      icon: Users,
      description: 'Manage your details',
      isNew: false 
    },
  ];

  const recentActivity = [
    { id: 1, title: 'University of Cape Town', type: 'Application Started', status: 'In Progress' },
    { id: 2, title: 'Student Accommodation', type: 'Search Saved', status: 'Saved' },
    { id: 3, title: 'Computer Science Course', type: 'Course Viewed', status: 'Viewed' },
    { id: 4, title: 'Application Documents', type: 'Upload Required', status: 'Pending' },
  ];

  const handleCardClick = (id: string) => {
    if (id === 'course-finder' || id === 'institutions' || id === 'accommodation') {
      onPageChange(id);
    } else {
      console.log(`Selected ${id}`);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onPageChange('institutions');
    }
  };

  return (
    <div className="flex-1 md:ml-24 min-h-screen">
      {/* Main Header */}
      <div className="pt-20 md:pt-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text animate-fade-in">
          Your University Journey Starts Here
        </h1>
        
        {/* Navigation Tabs */}
        <div className="flex justify-center gap-6 mb-8">
          <button 
            onClick={() => onPageChange('course-finder')}
            className="flex items-center gap-2 px-6 py-2 bg-purple-100 text-purple-700 rounded-full font-medium"
          >
            <span>🎓</span> Find Courses
          </button>
          <button 
            onClick={() => onPageChange('institutions')}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-purple-600 transition-colors"
          >
            <span>🏫</span> Universities
          </button>
          <button 
            onClick={() => onPageChange('accommodation')}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-purple-600 transition-colors"
          >
            <span>🏠</span> Accommodation
          </button>
          <button 
            onClick={() => setShowAI(true)}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-purple-600 transition-colors"
          >
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-0.5 rounded text-xs font-bold">New</span>
            AI Assistant
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search courses, universities, or accommodation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-12 pr-16 py-4 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button 
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <ArrowRight size={20} className="text-slate-600" />
            </button>
          </div>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {actionCards.map((card) => (
            <div
              key={card.id}
              className="relative group cursor-pointer"
              onClick={() => handleCardClick(card.id)}
            >
              <div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-200 p-6 card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl mb-4 mx-auto flex items-center justify-center">
                  <card.icon className="text-purple-600" size={24} />
                </div>
                <h3 className="font-medium text-slate-700 text-center text-sm mb-1">{card.title}</h3>
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

      {/* Recent Activity */}
      <div className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Recent Activity</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium">View all</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden card-hover">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    {activity.status === 'In Progress' && <div className="w-4 h-4 rounded-full bg-yellow-400"></div>}
                    {activity.status === 'Saved' && <div className="w-4 h-4 rounded-full bg-blue-400"></div>}
                    {activity.status === 'Viewed' && <div className="w-4 h-4 rounded-full bg-green-400"></div>}
                    {activity.status === 'Pending' && <div className="w-4 h-4 rounded-full bg-red-400"></div>}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-slate-800 mb-1">{activity.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-500">{activity.type}</p>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      activity.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                      activity.status === 'Saved' ? 'bg-blue-100 text-blue-700' :
                      activity.status === 'Viewed' ? 'bg-green-100 text-green-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Assistant */}
      {showAI && <AIAssistant onClose={() => setShowAI(false)} />}
    </div>
  );
};

export default Dashboard;
