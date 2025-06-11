
import { useState } from 'react';
import { Search, Filter, Building, MapPin, Users, GraduationCap, ShoppingCart } from 'lucide-react';
import ApplicationForm from './ApplicationForm';
import { useApplicationCart } from '../contexts/ApplicationCartContext';

const Institutions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState<any>(null);
  const { cartItems } = useApplicationCart();

  const institutionTypes = [
    { id: 'traditional', title: 'Traditional Universities', count: '26 institutions', color: 'bg-blue-500', icon: GraduationCap },
    { id: 'technology', title: 'Universities of Technology', count: '15 institutions', color: 'bg-green-500', icon: Building },
    { id: 'private', title: 'Private Institutions', count: '150+ institutions', color: 'bg-purple-500', icon: Users },
  ];

  const allInstitutions = [
    { 
      id: 'wits',
      name: 'University of the Witwatersrand',
      location: 'Johannesburg, Gauteng',
      type: 'Traditional University',
      students: '40,000+',
      established: '1922',
      thumbnail: '/lovable-uploads/db5b84cc-61c5-4506-ac51-53592238d36e.png',
      applicationFee: 200,
      courses: ['Engineering', 'Medicine', 'Law', 'Business', 'Arts', 'Science'],
      requirements: ['Matric Certificate', 'APS Score: 30+', 'English: 50%+', 'Mathematics: 50%+'],
      deadlines: ['Main Application: 30 September', 'Late Applications: 31 October']
    },
    { 
      id: 'uct',
      name: 'University of Cape Town',
      location: 'Cape Town, Western Cape',
      type: 'Traditional University',
      students: '29,000+',
      established: '1829',
      thumbnail: 'bg-gradient-to-br from-green-400 to-green-600',
      applicationFee: 250,
      courses: ['Medicine', 'Engineering', 'Commerce', 'Law', 'Humanities', 'Science'],
      requirements: ['Matric Certificate', 'APS Score: 35+', 'English: 60%+', 'Mathematics: 60%+'],
      deadlines: ['Main Application: 31 July', 'International: 31 May']
    },
    { 
      id: 'up',
      name: 'University of Pretoria',
      location: 'Pretoria, Gauteng',
      type: 'Traditional University',
      students: '53,000+',
      established: '1908',
      thumbnail: 'bg-gradient-to-br from-purple-400 to-purple-600',
      applicationFee: 200,
      courses: ['Medicine', 'Engineering', 'Veterinary Science', 'Law', 'Business', 'Education'],
      requirements: ['Matric Certificate', 'APS Score: 28+', 'English: 50%+'],
      deadlines: ['Main Application: 30 September', 'Medicine: 31 July']
    },
    { 
      id: 'stellenbosch',
      name: 'Stellenbosch University',
      location: 'Stellenbosch, Western Cape',
      type: 'Traditional University',
      students: '32,000+',
      established: '1918',
      thumbnail: 'bg-gradient-to-br from-orange-400 to-orange-600',
      applicationFee: 200,
      courses: ['Agriculture', 'Engineering', 'Medicine', 'Business', 'Arts', 'Science'],
      requirements: ['Matric Certificate', 'APS Score: 30+', 'English/Afrikaans: 50%+'],
      deadlines: ['Main Application: 30 September', 'Late Applications: 31 October']
    },
    { 
      id: 'ukzn',
      name: 'University of KwaZulu-Natal',
      location: 'Durban, KwaZulu-Natal',
      type: 'Traditional University',
      students: '47,000+',
      established: '2004',
      thumbnail: 'bg-gradient-to-br from-red-400 to-red-600',
      applicationFee: 180,
      courses: ['Medicine', 'Engineering', 'Law', 'Management', 'Humanities', 'Science'],
      requirements: ['Matric Certificate', 'APS Score: 28+', 'English: 50%+'],
      deadlines: ['Main Application: 30 September', 'Medicine: 31 July']
    },
    { 
      id: 'rhodes',
      name: 'Rhodes University',
      location: 'Grahamstown, Eastern Cape',
      type: 'Traditional University',
      students: '8,200+',
      established: '1904',
      thumbnail: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
      applicationFee: 150,
      courses: ['Journalism', 'Law', 'Pharmacy', 'Commerce', 'Humanities', 'Science'],
      requirements: ['Matric Certificate', 'APS Score: 25+', 'English: 50%+'],
      deadlines: ['Main Application: 31 August', 'Late Applications: 30 September']
    },
    {
      id: 'cput',
      name: 'Cape Peninsula University of Technology',
      location: 'Cape Town, Western Cape',
      type: 'University of Technology',
      students: '32,000+',
      established: '2005',
      thumbnail: 'bg-gradient-to-br from-teal-400 to-teal-600',
      applicationFee: 170,
      courses: ['Applied Sciences', 'Business', 'Engineering', 'Health Sciences', 'Informatics'],
      requirements: ['Matric Certificate', 'APS Score: 22+', 'English: 40%+'],
      deadlines: ['Main Application: 30 September', 'Late Applications: 31 October']
    },
    {
      id: 'tut',
      name: 'Tshwane University of Technology',
      location: 'Pretoria, Gauteng',
      type: 'University of Technology',
      students: '60,000+',
      established: '2004',
      thumbnail: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
      applicationFee: 160,
      courses: ['Engineering', 'Management Sciences', 'Arts & Design', 'ICT', 'Health Sciences'],
      requirements: ['Matric Certificate', 'APS Score: 20+', 'English: 40%+'],
      deadlines: ['Main Application: 30 September', 'Late Applications: 15 November']
    }
  ];

  const filteredInstitutions = allInstitutions.filter(institution => {
    const matchesSearch = institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         institution.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         institution.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = !selectedType || institution.type.toLowerCase().includes(selectedType.toLowerCase());
    return matchesSearch && matchesType;
  });

  const handleViewDetails = (institution: any) => {
    setSelectedInstitution(institution);
    setIsApplicationFormOpen(true);
  };

  return (
    <div className="flex-1 md:ml-24 min-h-screen pt-20 md:pt-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-text mb-4">South African Institutions</h1>
            <p className="text-slate-600">Discover and apply to universities and institutions across South Africa through our comprehensive platform</p>
          </div>
          {cartItems.length > 0 && (
            <div className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg">
              <ShoppingCart size={20} />
              <span className="font-medium">{cartItems.length} in cart</span>
            </div>
          )}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search institutions by name, location, or program..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div className="flex gap-2">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">All Types</option>
              <option value="traditional">Traditional Universities</option>
              <option value="technology">Universities of Technology</option>
              <option value="private">Private Institutions</option>
            </select>
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
              <div 
                key={type.id} 
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 card-hover cursor-pointer"
                onClick={() => setSelectedType(type.id)}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl mb-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/db5b84cc-61c5-4506-ac51-53592238d36e.png" 
                    alt="Education" 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{type.title}</h3>
                <p className="text-slate-500 text-sm">{type.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              {searchTerm || selectedType ? `Search Results (${filteredInstitutions.length})` : 'Featured Institutions'}
            </h2>
            {(searchTerm || selectedType) && (
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedType('');
                }}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Clear filters
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInstitutions.map((institution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden card-hover cursor-pointer">
                <div className="h-32 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <img 
                    src={institution.thumbnail} 
                    alt={institution.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-slate-800 mb-2">{institution.name}</h3>
                  <div className="space-y-2 text-sm text-slate-500 mb-4">
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
                      Established {institution.established} • Application Fee: R{institution.applicationFee}
                    </div>
                  </div>
                  <button 
                    onClick={() => handleViewDetails(institution)}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                  >
                    View Details & Apply
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredInstitutions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No institutions found matching your search criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedType('');
                }}
                className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
              >
                Clear search and view all institutions
              </button>
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Student Accommodation', 'Course Finder', 'Private Institutions', 'Traditional Universities', 'Universities of Technology'].map((link, index) => (
              <button key={index} className="p-4 text-center hover:bg-slate-50 rounded-xl transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/db5b84cc-61c5-4506-ac51-53592238d36e.png" 
                    alt="Education" 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-sm text-slate-600 font-medium">{link}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <ApplicationForm
        isOpen={isApplicationFormOpen}
        onClose={() => setIsApplicationFormOpen(false)}
        selectedInstitution={selectedInstitution}
      />
    </div>
  );
};

export default Institutions;
