import { Search, Filter, ArrowRight, BookOpen, Clock, MapPin, TrendingUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import CareerAssessmentModal from './CareerAssessmentModal';

const CourseFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedCost, setSelectedCost] = useState('');
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [showCareerAssessment, setShowCareerAssessment] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const courses = [
    // Engineering
    { title: 'Bachelor of Engineering (Civil)', field: 'Engineering', level: 'Undergraduate', duration: '4 years', cost: 'High', institutions: ['UCT', 'Wits', 'UP', 'Stellenbosch'], requirements: 'NSC with Bachelor\'s Pass + Mathematics + Physical Science' },
    { title: 'Bachelor of Engineering (Mechanical)', field: 'Engineering', level: 'Undergraduate', duration: '4 years', cost: 'High', institutions: ['Wits', 'UP', 'UKZN', 'UCT'], requirements: 'NSC with Bachelor\'s Pass + Mathematics + Physical Science' },
    { title: 'Bachelor of Engineering (Electrical)', field: 'Engineering', level: 'Undergraduate', duration: '4 years', cost: 'High', institutions: ['Wits', 'UCT', 'UP', 'Stellenbosch'], requirements: 'NSC with Bachelor\'s Pass + Mathematics + Physical Science' },
    { title: 'Bachelor of Engineering (Chemical)', field: 'Engineering', level: 'Undergraduate', duration: '4 years', cost: 'High', institutions: ['UCT', 'Wits', 'UKZN'], requirements: 'NSC with Bachelor\'s Pass + Mathematics + Physical Science + Chemistry' },
    
    // Business & Management
    { title: 'Bachelor of Business Administration', field: 'Business', level: 'Undergraduate', duration: '3 years', cost: 'Medium', institutions: ['UCT', 'Wits', 'UP', 'Stellenbosch', 'UKZN'], requirements: 'NSC with Bachelor\'s Pass + Mathematics' },
    { title: 'Bachelor of Commerce', field: 'Business', level: 'Undergraduate', duration: '3 years', cost: 'Medium', institutions: ['UCT', 'Wits', 'UP', 'Stellenbosch', 'UKZN'], requirements: 'NSC with Bachelor\'s Pass + Mathematics' },
    { title: 'Bachelor of Accounting Sciences', field: 'Business', level: 'Undergraduate', duration: '3 years', cost: 'Medium', institutions: ['Wits', 'UP', 'UKZN', 'UNISA'], requirements: 'NSC with Bachelor\'s Pass + Mathematics' },
    { title: 'Master of Business Administration (MBA)', field: 'Business', level: 'Masters', duration: '2 years', cost: 'High', institutions: ['UCT GSB', 'Wits Business School', 'UP Gordon Institute'], requirements: 'Bachelor\'s degree + work experience' },
    
    // Health Sciences
    { title: 'Bachelor of Medicine and Surgery (MBChB)', field: 'Health Sciences', level: 'Undergraduate', duration: '6 years', cost: 'High', institutions: ['UCT', 'Wits', 'UP', 'UKZN', 'Stellenbosch'], requirements: 'NSC with Bachelor\'s Pass + High APS Score + Mathematics + Physical Science + Life Sciences' },
    { title: 'Bachelor of Nursing', field: 'Health Sciences', level: 'Undergraduate', duration: '4 years', cost: 'Medium', institutions: ['UCT', 'Wits', 'UP', 'UKZN', 'NWU'], requirements: 'NSC with Bachelor\'s Pass + Mathematics + Physical Science + Life Sciences' },
    { title: 'Bachelor of Pharmacy', field: 'Health Sciences', level: 'Undergraduate', duration: '4 years', cost: 'High', institutions: ['UCT', 'Wits', 'UP', 'UKZN', 'Rhodes'], requirements: 'NSC with Bachelor\'s Pass + Mathematics + Physical Science + Life Sciences' },
    { title: 'Bachelor of Dentistry', field: 'Health Sciences', level: 'Undergraduate', duration: '5 years', cost: 'High', institutions: ['UCT', 'Wits', 'UP', 'UKZN'], requirements: 'NSC with Bachelor\'s Pass + High APS Score + Mathematics + Physical Science + Life Sciences' },
    
    // Information Technology
    { title: 'Bachelor of Computer Science', field: 'Information Technology', level: 'Undergraduate', duration: '3 years', cost: 'Medium', institutions: ['UCT', 'Wits', 'UP', 'Stellenbosch', 'UKZN'], requirements: 'NSC with Bachelor\'s Pass + Mathematics' },
    { title: 'Bachelor of Information Technology', field: 'Information Technology', level: 'Undergraduate', duration: '3 years', cost: 'Medium', institutions: ['UP', 'TUT', 'CPUT', 'DUT'], requirements: 'NSC with Bachelor\'s Pass + Mathematics' },
    { title: 'Bachelor of Data Science', field: 'Information Technology', level: 'Undergraduate', duration: '3 years', cost: 'Medium', institutions: ['UCT', 'Wits', 'UP'], requirements: 'NSC with Bachelor\'s Pass + Mathematics + Physical Science' },
    { title: 'Bachelor of Software Engineering', field: 'Information Technology', level: 'Undergraduate', duration: '4 years', cost: 'Medium', institutions: ['Wits', 'UP', 'Stellenbosch'], requirements: 'NSC with Bachelor\'s Pass + Mathematics' },
    
    // Law
    { title: 'Bachelor of Laws (LLB)', field: 'Law', level: 'Undergraduate', duration: '4 years', cost: 'Medium', institutions: ['UCT', 'Wits', 'UP', 'Stellenbosch', 'UKZN'], requirements: 'NSC with Bachelor\'s Pass + High APS Score' },
    { title: 'Bachelor of Arts in Law', field: 'Law', level: 'Undergraduate', duration: '3 years', cost: 'Medium', institutions: ['UCT', 'Wits', 'UP', 'UKZN'], requirements: 'NSC with Bachelor\'s Pass' },
    
    // Education
    { title: 'Bachelor of Education (Foundation Phase)', field: 'Education', level: 'Undergraduate', duration: '4 years', cost: 'Low', institutions: ['UCT', 'Wits', 'UP', 'Stellenbosch', 'UKZN'], requirements: 'NSC with Bachelor\'s Pass' },
    { title: 'Bachelor of Education (Senior Phase)', field: 'Education', level: 'Undergraduate', duration: '4 years', cost: 'Low', institutions: ['UCT', 'Wits', 'UP', 'UKZN'], requirements: 'NSC with Bachelor\'s Pass + Subject specialization' },
    { title: 'Postgraduate Certificate in Education (PGCE)', field: 'Education', level: 'Postgraduate Certificate', duration: '1 year', cost: 'Low', institutions: ['UCT', 'Wits', 'UP', 'Stellenbosch'], requirements: 'Bachelor\'s degree in relevant field' },
    
    // Arts & Humanities
    { title: 'Bachelor of Arts', field: 'Arts & Humanities', level: 'Undergraduate', duration: '3 years', cost: 'Low', institutions: ['UCT', 'Wits', 'UP', 'Stellenbosch', 'UKZN'], requirements: 'NSC with Bachelor\'s Pass' },
    { title: 'Bachelor of Social Work', field: 'Arts & Humanities', level: 'Undergraduate', duration: '4 years', cost: 'Low', institutions: ['UCT', 'Wits', 'UP', 'UKZN'], requirements: 'NSC with Bachelor\'s Pass' },
    { title: 'Bachelor of Psychology', field: 'Arts & Humanities', level: 'Undergraduate', duration: '3 years', cost: 'Medium', institutions: ['UCT', 'Wits', 'UP', 'Stellenbosch', 'UKZN'], requirements: 'NSC with Bachelor\'s Pass + Mathematics' },
    
    // Science
    { title: 'Bachelor of Science', field: 'Science', level: 'Undergraduate', duration: '3 years', cost: 'Medium', institutions: ['UCT', 'Wits', 'UP', 'Stellenbosch', 'UKZN'], requirements: 'NSC with Bachelor\'s Pass + Mathematics + Physical Science' },
    { title: 'Bachelor of Science (Honours)', field: 'Science', level: 'Honours', duration: '1 year', cost: 'Medium', institutions: ['UCT', 'Wits', 'UP', 'Stellenbosch'], requirements: 'Bachelor\'s degree in relevant field' },
    { title: 'Master of Science', field: 'Science', level: 'Masters', duration: '2 years', cost: 'Medium', institutions: ['UCT', 'Wits', 'UP', 'Stellenbosch'], requirements: 'Honours degree or equivalent' },
  ];

  const popularFields = [
    { name: 'Business & Management', courses: '150+ courses', color: 'bg-blue-500' },
    { name: 'Engineering', courses: '120+ courses', color: 'bg-green-500' },
    { name: 'Health Sciences', courses: '85+ courses', color: 'bg-red-500' },
    { name: 'Information Technology', courses: '95+ courses', color: 'bg-purple-500' },
    { name: 'Education', courses: '75+ courses', color: 'bg-orange-500' },
    { name: 'Law', courses: '45+ courses', color: 'bg-indigo-500' },
  ];

  const studyLevels = ['Certificate', 'Diploma', 'Undergraduate', 'Honours', 'Masters', 'Doctorate'];
  const durations = ['1 year', '2 years', '3 years', '4 years', '5 years', '6 years'];
  const costs = ['Low', 'Medium', 'High'];

  const searchSuggestions = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.institutions.some((inst: string) => inst.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSearch = () => {
    let filtered = courses;

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.institutions.some((inst: string) => inst.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedLevel) {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }

    if (selectedField) {
      filtered = filtered.filter(course => course.field === selectedField);
    }

    if (selectedDuration) {
      filtered = filtered.filter(course => course.duration === selectedDuration);
    }

    if (selectedCost) {
      filtered = filtered.filter(course => course.cost === selectedCost);
    }

    setFilteredCourses(filtered);
    setShowSearchSuggestions(false);
    
    // Smooth scroll to results
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleApply = (course: any) => {
    // Navigate to institutions page with pre-filtered institutions
    window.dispatchEvent(new CustomEvent('changePage', { detail: 'institutions' }));
  };

  const handleSuggestionClick = (course: any) => {
    setSearchTerm(course.title);
    setShowSearchSuggestions(false);
  };

  const handleCareerAssessment = () => {
    setShowCareerAssessment(true);
  };

  const displayCourses = filteredCourses.length > 0 ? filteredCourses : courses.slice(0, 8);

  return (
    <div className="flex-1 md:ml-24 min-h-screen pt-20 md:pt-12 px-6">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="relative">
              <label className="block text-sm font-medium text-slate-700 mb-2">Course or Field</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="e.g. Computer Science, Medicine"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSearchSuggestions(e.target.value.length > 0);
                  }}
                  onFocus={() => searchTerm.length > 0 && setShowSearchSuggestions(true)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              {/* Search Suggestions */}
              {showSearchSuggestions && searchSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-slate-200 z-50 max-h-60 overflow-y-auto">
                  {searchSuggestions.slice(0, 5).map((course, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(course)}
                      className="w-full px-4 py-3 text-left hover:bg-slate-50 border-b border-slate-100 last:border-b-0 transition-colors"
                    >
                      <div className="font-medium text-slate-800">{course.title}</div>
                      <div className="text-sm text-slate-500">{course.field} • {course.level}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Study Level</label>
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">All Levels</option>
                {studyLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Field of Study</label>
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">All Fields</option>
                {popularFields.map(field => (
                  <option key={field.name} value={field.name}>{field.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Duration</label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Any Duration</option>
                {durations.map(duration => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button onClick={handleSearch} className="w-full button-primary">
                <Search size={20} className="mr-2" />
                Search Courses
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Cost Level</label>
                <select
                  value={selectedCost}
                  onChange={(e) => setSelectedCost(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Any Cost</option>
                  {costs.map(cost => (
                    <option key={cost} value={cost}>{cost}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedLevel('');
                    setSelectedField('');
                    setSelectedDuration('');
                    setSelectedCost('');
                    setFilteredCourses([]);
                    setShowSearchSuggestions(false);
                  }}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Fields */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Popular Study Fields</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularFields.map((field, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 card-hover cursor-pointer text-center"
                onClick={() => {
                  setSelectedField(field.name);
                  handleSearch();
                }}
              >
                <div className={`w-12 h-12 ${field.color} rounded-xl mx-auto mb-4`}></div>
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">{field.name}</h3>
                <p className="text-xs text-slate-500">{field.courses}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Course Results */}
        <div className="mb-12" ref={resultsRef}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              {filteredCourses.length > 0 ? `Search Results (${filteredCourses.length})` : 'Featured Courses'}
            </h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
              View all courses <TrendingUp size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 mb-2">{course.title}</h3>
                    <p className="text-purple-600 font-medium">{course.institutions.join(', ')}</p>
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
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      course.cost === 'Low' ? 'bg-green-100 text-green-700' :
                      course.cost === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {course.cost} Cost
                    </span>
                  </div>
                  <div className="text-sm text-slate-600">
                    <strong>Requirements:</strong> {course.requirements}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => handleApply(course)}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                  >
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
          <button 
            onClick={handleCareerAssessment}
            className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
          >
            Take Career Assessment
          </button>
        </div>
      </div>

      {/* Career Assessment Modal */}
      {showCareerAssessment && (
        <CareerAssessmentModal onClose={() => setShowCareerAssessment(false)} />
      )}
    </div>
  );
};

export default CourseFinder;