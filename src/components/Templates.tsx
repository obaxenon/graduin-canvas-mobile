
import { Search, Filter, ArrowRight } from 'lucide-react';

const Templates = () => {
  const categories = [
    { id: 'presentations', title: 'Presentations', count: '1.2k templates', color: 'bg-blue-500' },
    { id: 'social-media', title: 'Social Media', count: '890 templates', color: 'bg-pink-500' },
    { id: 'marketing', title: 'Marketing', count: '650 templates', color: 'bg-green-500' },
    { id: 'documents', title: 'Documents', count: '420 templates', color: 'bg-purple-500' },
    { id: 'websites', title: 'Websites', count: '320 templates', color: 'bg-orange-500' },
    { id: 'print', title: 'Print', count: '280 templates', color: 'bg-red-500' },
  ];

  const featuredTemplates = [
    { id: 1, title: 'Modern Business Presentation', category: 'Presentations', thumbnail: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { id: 2, title: 'Instagram Story Template', category: 'Social Media', thumbnail: 'bg-gradient-to-br from-pink-400 to-pink-600' },
    { id: 3, title: 'Marketing Flyer Design', category: 'Marketing', thumbnail: 'bg-gradient-to-br from-green-400 to-green-600' },
    { id: 4, title: 'Resume Template Pro', category: 'Documents', thumbnail: 'bg-gradient-to-br from-purple-400 to-purple-600' },
    { id: 5, title: 'Landing Page Layout', category: 'Websites', thumbnail: 'bg-gradient-to-br from-orange-400 to-orange-600' },
    { id: 6, title: 'Business Card Design', category: 'Print', thumbnail: 'bg-gradient-to-br from-red-400 to-red-600' },
  ];

  return (
    <div className="flex-1 md:ml-16 min-h-screen pt-20 md:pt-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold gradient-text mb-4">Design Templates</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Choose from thousands of professionally designed templates to kickstart your creative projects</p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search templates..."
              className="w-full pl-12 pr-16 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
              <ArrowRight size={20} className="text-slate-600" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 card-hover cursor-pointer">
                <div className={`w-12 h-12 ${category.color} rounded-xl mb-4`}></div>
                <h3 className="font-semibold text-slate-800 mb-2">{category.title}</h3>
                <p className="text-slate-500 text-sm">{category.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Templates */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Featured Templates</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
              View all <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTemplates.map((template) => (
              <div key={template.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden card-hover cursor-pointer">
                <div className={`aspect-[4/3] ${template.thumbnail} flex items-center justify-center`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-slate-800 mb-2">{template.title}</h3>
                  <p className="text-slate-500 text-sm">{template.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
