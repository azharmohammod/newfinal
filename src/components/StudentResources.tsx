import React, { useState } from 'react';
import { 
  Calendar, 
  FileText, 
  Download, 
  Clock, 
  Award, 
  Bell, 
  FileCheck, 
  Search, 
  ExternalLink, 
  Eye, 
  Sparkles,
  Layers,
  Check
} from 'lucide-react';
import { ResourceItem, ResourceCategory } from '../types';
import { RESOURCES_DATA } from '../data/mockData';

interface StudentResourcesProps {
  onPreviewResource: (item: ResourceItem) => void;
  onDownloadResource: (item: ResourceItem) => void;
}

export const StudentResources: React.FC<StudentResourcesProps> = ({
  onPreviewResource,
  onDownloadResource,
}) => {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | 'all'>('all');
  const [resourceSearch, setResourceSearch] = useState('');
  const [downloadedIds, setDownloadedIds] = useState<Record<string, boolean>>({});

  const categories: { id: ResourceCategory | 'all'; label: string; icon: any; count: number }[] = [
    { id: 'all', label: 'All Resources', icon: Layers, count: RESOURCES_DATA.length },
    { id: 'routine', label: 'Class Routine', icon: Clock, count: RESOURCES_DATA.filter(r => r.category === 'routine').length },
    { id: 'exam', label: 'Exam Routine', icon: Calendar, count: RESOURCES_DATA.filter(r => r.category === 'exam').length },
    { id: 'result', label: 'Result', icon: Award, count: RESOURCES_DATA.filter(r => r.category === 'result').length },
    { id: 'notice', label: 'Notice', icon: Bell, count: RESOURCES_DATA.filter(r => r.category === 'notice').length },
    { id: 'calendar', label: 'Academic Calendar', icon: Calendar, count: RESOURCES_DATA.filter(r => r.category === 'calendar').length },
    { id: 'forms', label: 'Download Forms', icon: FileCheck, count: RESOURCES_DATA.filter(r => r.category === 'forms').length },
  ];

  const filteredResources = RESOURCES_DATA.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = resourceSearch === '' || 
      item.title.toLowerCase().includes(resourceSearch.toLowerCase()) ||
      (item.department && item.department.toLowerCase().includes(resourceSearch.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(resourceSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleDownloadClick = (item: ResourceItem) => {
    setDownloadedIds(prev => ({ ...prev, [item.id]: true }));
    onDownloadResource(item);
    setTimeout(() => {
      setDownloadedIds(prev => ({ ...prev, [item.id]: false }));
    }, 2500);
  };

  return (
    <section id="student-resources-section" className="mb-14">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Official Academic Hub
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Student Academic Resources
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
            Access updated class schedules, examination routines, published board results, official notices, academic calendars, and printable student clearance forms.
          </p>
        </div>

        {/* Search within resources */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={resourceSearch}
            onChange={(e) => setResourceSearch(e.target.value)}
            placeholder="Filter routines, notices, forms..."
            className="w-full pl-9.5 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-2xs"
          />
        </div>
      </div>

      {/* Categories Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                isActive
                  ? 'bg-[#003822] text-white border-[#003822] shadow-xs'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:text-emerald-800 hover:border-emerald-400'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-300' : 'text-emerald-700'}`} />
              <span>{cat.label}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                isActive ? 'bg-emerald-900 text-emerald-200' : 'bg-slate-100 text-slate-600'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Resources Cards Grid */}
      {filteredResources.length === 0 ? (
        <div className="bg-white rounded-xl p-10 text-center border border-slate-200">
          <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No resources found</h3>
          <p className="text-xs text-slate-500 mt-1">
            Try adjusting your search keyword or selecting a different category above.
          </p>
          <button
            onClick={() => { setActiveCategory('all'); setResourceSearch(''); }}
            className="mt-4 px-4 py-2 bg-[#003822] text-white text-xs font-bold rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredResources.map((item) => {
            const isDownloaded = downloadedIds[item.id];
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:border-emerald-400"
              >
                <div className="p-5">
                  {/* Card Category Tag & Date */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {item.category.toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-600 font-medium">
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {/* Meta Details */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
                    {item.department && (
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-medium">
                        {item.department}
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                      {item.fileType} • {item.fileSize}
                    </span>
                    {item.isNew && (
                      <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                        New
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onPreviewResource(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-emerald-800 py-1 px-2 rounded hover:bg-white transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-600" />
                    <span>View Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDownloadClick(item)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-2xs cursor-pointer ${
                      isDownloaded
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#003822] hover:bg-[#002818] text-white'
                    }`}
                  >
                    {isDownloaded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Downloaded</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5 text-emerald-300" />
                        <span>{item.fileType === 'LINK' ? 'Open Portal' : 'Download'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
