import React, { useState } from 'react';
import { Bell, FileText, Download, Calendar, ShieldCheck, ChevronRight, Search, ExternalLink } from 'lucide-react';
import { LATEST_NOTICES } from '../data/mockData';
import { NoticeItem } from '../types';

interface NoticeBoardSectionProps {
  onSelectNotice: (notice: NoticeItem) => void;
}

export const NoticeBoardSection: React.FC<NoticeBoardSectionProps> = ({ onSelectNotice }) => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredNotices = LATEST_NOTICES.filter(n => {
    const matchesCat = selectedCat === 'All' || n.category === selectedCat;
    const matchesSearch = searchTerm === '' || 
      n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="notice-section" className="mb-14 bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
      {/* Notice Header */}
      <div className="bg-[#003822] text-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1 rounded bg-emerald-500/20 text-emerald-300">
              <Bell className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Official Bulletin
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif">
            Institutional Notice Board
          </h3>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-1.5">
          {['All', 'Examination', 'Academic', 'Scholarship', 'General'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`text-xs px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
                selectedCat === cat
                  ? 'bg-white text-[#003822] shadow-xs'
                  : 'bg-white/10 text-emerald-100 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Notices List */}
      <div className="divide-y divide-slate-200">
        {filteredNotices.map(notice => (
          <div
            key={notice.id}
            className="p-5 hover:bg-slate-50/80 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  {notice.category}
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {notice.date}
                </span>
                {notice.important && (
                  <span className="text-[10px] font-bold px-1.5 py-0.2 bg-red-100 text-red-700 rounded uppercase">
                    Important
                  </span>
                )}
              </div>

              <h4 
                onClick={() => onSelectNotice(notice)}
                className="text-base font-bold text-slate-900 hover:text-emerald-800 cursor-pointer transition-colors"
              >
                {notice.title}
              </h4>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {notice.summary}
              </p>

              <div className="text-[11px] text-slate-400">
                Published by: <span className="font-semibold text-slate-600">{notice.publishedBy}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => onSelectNotice(notice)}
                className="inline-flex items-center gap-1 px-3.5 py-2 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                <span>Read Full Circular</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
