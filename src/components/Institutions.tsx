
import { Search, Filter, Building, MapPin, Users, GraduationCap } from 'lucide-react';

const Institutions = () => {
  const institutionTypes = [
    { id: 'traditional', title: 'Traditional Universities', count: '26 institutions', color: 'bg-blue-500', icon: GraduationCap },
    { id: 'technology', title: 'Universities of Technology', count: '15 institutions', color: 'bg-green-500', icon: Building },
    { id: 'private', title: 'Private Institutions', count: '150+ institutions', color: 'bg-purple-500', icon: Users },
  ];

  const featuredInstitutions = [
    { 
      name: 'University of the Witwatersrand',
      location: 'Johannesburg, Gauteng',
      type: 'Traditional University',
      students: '40,000+',
      established: '1922',
      thumbnail: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    { 
      name: 'University of Cape Town',
      location: 'Cape Town, Western Cape',
      type: 'Traditional University',
      students: '29,000+',
      established: '1829',
      thumbnail: 'bg-gradient-to-br from-green-400 to-green-600'
    },
    { 
      name: 'University of Pretoria',
      location: 'Pretoria, Gauteng',
      type: 'Traditional University',
      students: '53,000+',
      established: '1908',
      thumbnail: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    { 
      name: 'Stellenbosch University',
      location: 'Stellenbosch, Western Cape',
      type: 'Traditional University',
      students: '32,000+',
      established: '1918',
      thumbnail: 'bg-gradient-to-br from-orange-400 to-orange-600'
    },
    { 
      name: 'University of KwaZulu-Natal',
      location: 'Durban, KwaZulu-Natal',
      type: 'Traditional University',
      students: '47,000+',
      established: '2004',
      thumbnail: 'bg-gradient-to-br from-red-400 to-red-600'
    },
    { 
      name: 'Rhodes University',
      location: 'Grahamstown, Eastern Cape',
      type: 'Traditional University',
      students: '8,200+',
      established: '1904',
      thumbnail: 'bg-gradient-to-br from-indigo-400 to-indigo-600'
    },
  ];

  return (
    <div className="flex-1 md:ml-16 min-h-screen pt-20 md:pt-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-4">South African Institutions</h1>
          <p className="text-slate-600">Discover and apply to universities and institutions across South Africa through our comprehensive platform</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search institutions by name, location, or program..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Filter size={18} />
              <span className="hidden md:inline">Filter by Type</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <MapPin size={18} />
              <span className="hidden md:inline">Location</span>
            </button>
          </div>
        </div>

        {/* Institution Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Browse by Institution Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {institutionTypes.map((type) => (
              <div key={type.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 card-hover cursor-pointer">
                <div className={`w-12 h-12 ${type.color} rounded-xl mb-4 flex items-center justify-center`}>
                  <type.icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{type.title}</h3>
                <p className="text-slate-500 text-sm">{type.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Institutions */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Featured Institutions</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium">View all institutions</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredInstitutions.map((institution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden card-hover cursor-pointer">
                <div className={`h-32 ${institution.thumbnail} flex items-center justify-center`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-slate-800 mb-2">{institution.name}</h3>
                  <div className="space-y-2 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{institution.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building size={16} />
                      <span>{institution.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>{institution.students} students</span>
                    </div>
                    <div className="text-xs text-slate-400">
                      Established {institution.established}
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                    View Details & Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Student Accommodation', 'Course Finder', 'Private Institutions', 'Traditional Universities', 'Universities of Technology'].map((link, index) => (
              <button key={index} className="p-4 text-center hover:bg-slate-50 rounded-xl transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl mx-auto mb-2"></div>
                <span className="text-sm text-slate-600 font-medium">{link}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institutions;
