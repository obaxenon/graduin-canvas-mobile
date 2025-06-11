import { Search, Filter, Grid, List, Plus } from 'lucide-react';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Brand Identity Package', type: 'Design System', lastModified: '2 days ago', thumbnail: 'bg-gradient-to-br from-purple-400 to-pink-400' },
    { id: 2, title: 'Marketing Campaign 2024', type: 'Social Media', lastModified: '5 days ago', thumbnail: 'bg-gradient-to-br from-blue-400 to-cyan-400' },
    { id: 3, title: 'Product Launch Presentation', type: 'Presentation', lastModified: '1 week ago', thumbnail: 'bg-gradient-to-br from-green-400 to-emerald-400' },
    { id: 4, title: 'Website Redesign Mockups', type: 'Web Design', lastModified: '2 weeks ago', thumbnail: 'bg-gradient-to-br from-orange-400 to-red-400' },
    { id: 5, title: 'Annual Report Design', type: 'Document', lastModified: '3 weeks ago', thumbnail: 'bg-gradient-to-br from-indigo-400 to-purple-400' },
    { id: 6, title: 'Social Media Templates', type: 'Templates', lastModified: '1 month ago', thumbnail: 'bg-gradient-to-br from-pink-400 to-rose-400' },
  ];

  return (
    <div className="flex-1 md:ml-16 min-h-screen pt-20 md:pt-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-4">Your Projects</h1>
          <p className="text-slate-600">Manage and organize all your creative projects in one place</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search your projects..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Filter size={18} />
              <span className="hidden md:inline">Filter</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Grid size={18} />
            </button>
            <button className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden card-hover cursor-pointer">
              <div className={`aspect-[4/3] ${project.thumbnail} flex items-center justify-center`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl"></div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-slate-800 mb-2">{project.title}</h3>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{project.type}</span>
                  <span>{project.lastModified}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Create New Project Button */}
        <div className="mt-8 text-center">
          <button className="button-primary">
            <Plus size={20} className="mr-2" />
            Create New Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
