
import { Search, ArrowRight } from 'lucide-react';

interface DashboardProps {
  onPageChange: (page: string) => void;
}

const Dashboard = ({ onPageChange }: DashboardProps) => {
  const designOptions = [
    { id: 'sheet', title: 'Sheet', color: 'bg-blue-500', isNew: true },
    { id: 'doc', title: 'Doc', color: 'bg-teal-500' },
    { id: 'whiteboard', title: 'Whiteboard', color: 'bg-green-500' },
    { id: 'presentation', title: 'Presentation', color: 'bg-orange-500' },
    { id: 'social-media', title: 'Social media', color: 'bg-red-500' },
    { id: 'photo-editor', title: 'Photo editor', color: 'bg-pink-500', isNew: true },
    { id: 'video', title: 'Video', color: 'bg-purple-500' },
    { id: 'print', title: 'Print', color: 'bg-indigo-500' },
    { id: 'website', title: 'Website', color: 'bg-blue-600' },
    { id: 'custom-size', title: 'Custom size', color: 'bg-gray-500' },
    { id: 'upload', title: 'Upload', color: 'bg-gray-600' },
    { id: 'more', title: 'More', color: 'bg-gray-700' },
  ];

  const recentDesigns = [
    { id: 1, title: 'Project Overview', type: 'Sheet' },
    { id: 2, title: 'Brand Guidelines', type: 'Doc' },
    { id: 3, title: 'Marketing Plan', type: 'Presentation' },
    { id: 4, title: 'Social Campaign', type: 'Social media' },
  ];

  return (
    <div className="flex-1 md:ml-16 min-h-screen">
      {/* Main Header */}
      <div className="pt-20 md:pt-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text animate-fade-in">
          What will you design today?
        </h1>
        
        {/* Navigation Tabs */}
        <div className="flex justify-center gap-6 mb-8">
          <button 
            onClick={() => onPageChange('projects')}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-purple-600 transition-colors"
          >
            <span>📁</span> Your designs
          </button>
          <button 
            onClick={() => onPageChange('templates')}
            className="flex items-center gap-2 px-6 py-2 bg-purple-100 text-purple-700 rounded-full font-medium"
          >
            <span>🎨</span> Templates
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-purple-600 transition-colors">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-0.5 rounded text-xs font-bold">New</span>
            Graduin AI
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search millions of templates"
              className="w-full pl-12 pr-16 py-4 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
              <ArrowRight size={20} className="text-slate-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Design Options Grid */}
      <div className="px-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {designOptions.map((option) => (
            <div
              key={option.id}
              className="relative group cursor-pointer"
              onClick={() => console.log(`Selected ${option.title}`)}
            >
              <div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-200 p-6 card-hover">
                <div className={`w-12 h-12 ${option.color} rounded-xl mb-4 mx-auto`}></div>
                <h3 className="font-medium text-slate-700 text-center text-sm">{option.title}</h3>
                {option.isNew && (
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    New
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Designs */}
      <div className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Recent designs</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium">View all</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentDesigns.map((design) => (
              <div key={design.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden card-hover">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200"></div>
                <div className="p-4">
                  <h3 className="font-medium text-slate-800 mb-1">{design.title}</h3>
                  <p className="text-sm text-slate-500">{design.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
