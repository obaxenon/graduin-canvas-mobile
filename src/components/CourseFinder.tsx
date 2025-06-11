
import { Search, Filter, BookOpen, Clock, MapPin, TrendingUp } from 'lucide-react';

const CourseFinder = () => {
  const popularFields = [
    { name: 'Business & Management', courses: '150+ courses', color: 'bg-blue-500' },
    { name: 'Engineering', courses: '120+ courses', color: 'bg-green-500' },
    { name: 'Health Sciences', courses: '85+ courses', color: 'bg-red-500' },
    { name: 'Information Technology', courses: '95+ courses', color: 'bg-purple-500' },
    { name: 'Education', courses: '75+ courses', color: 'bg-orange-500' },
    { name: 'Law', courses: '45+ courses', color: 'bg-indigo-500' },
  ];

  const featuredCourses = [
    {
      title: 'Bachelor of Business Administration',
      institution: 'University of Cape Town',
      duration: '3 years',
      field: 'Business',
      level: 'Undergraduate',
      requirements: 'NSC with Bachelor\'s Pass',
    },
    {
      title: 'Bachelor of Engineering (Mechanical)',
      institution: 'University of the Witwatersrand',
      duration: '4 years',
      field: 'Engineering',
      level: 'Undergraduate',
      requirements: 'NSC with Bachelor\'s Pass + Mathematics & Physical Science',
    },
    {
      title: 'Bachelor of Medicine and Surgery',
      institution: 'University of Pretoria',
      duration: '6 years',
      field: 'Health Sciences',
      level: 'Undergraduate',
      requirements: 'NSC with Bachelor\'s Pass + High APS Score',
    },
    {
      title: 'Bachelor of Computer Science',
      institution: 'Stellenbosch University',
      duration: '3 years',
      field: 'Information Technology',
      level: 'Undergraduate',
      requirements: 'NSC with Bachelor\'s Pass + Mathematics',
    },
  ];

  const studyLevels = ['Certificate', 'Diploma', 'Undergraduate', 'Honours', 'Masters', 'Doctorate'];

  return (
    <div className="flex-1 md:ml-16 min-h-screen pt-20 md:pt-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Find Your Perfect Course</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover thousands of courses across South African institutions. Find the perfect program that matches your interests and career goals.
          </p>
        </div>

        {/* Advanced Search */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Advanced Course Search</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Course or Field</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="e.g. Computer Science, Medicine"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Study Level</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>All Levels</option>
                {studyLevels.map(level => (
                  <option key={level}>{level}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Institution</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by institution name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>All Provinces</option>
                <option>Gauteng</option>
                <option>Western Cape</option>
                <option>KwaZulu-Natal</option>
                <option>Eastern Cape</option>
                <option>Free State</option>
                <option>Limpopo</option>
                <option>Mpumalanga</option>
                <option>North West</option>
                <option>Northern Cape</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Duration</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Any Duration</option>
                <option>1 Year</option>
                <option>2 Years</option>
                <option>3 Years</option>
                <option>4 Years</option>
                <option>5+ Years</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full button-primary">
                <Search size={20} className="mr-2" />
                Search Courses
              </button>
            </div>
          </div>
        </div>

        {/* Popular Fields */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Popular Study Fields</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularFields.map((field, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 card-hover cursor-pointer text-center">
                <div className={`w-12 h-12 ${field.color} rounded-xl mx-auto mb-4`}></div>
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">{field.name}</h3>
                <p className="text-xs text-slate-500">{field.courses}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Courses */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Featured Courses</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
              View all courses <TrendingUp size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 mb-2">{course.title}</h3>
                    <p className="text-purple-600 font-medium">{course.institution}</p>
                  </div>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <BookOpen size={16} />
                    <span>{course.field}</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    <strong>Requirements:</strong> {course.requirements}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                    Apply Now
                  </button>
                  <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Guidance */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure What to Study?</h2>
          <p className="text-lg mb-8 opacity-90">Take our career assessment to discover courses that match your interests and strengths.</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
            Take Career Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseFinder;
