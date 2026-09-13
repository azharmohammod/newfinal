import React from 'react';
import { Bell, ChevronRight, Sparkles } from 'lucide-react';
import { LATEST_NOTICES } from '../data/mockData';
import { NoticeItem } from '../types';

interface NoticeTickerProps {
  onSelectNotice: (notice: NoticeItem) => void;
}

export const NoticeTicker: React.FC<NoticeTickerProps> = ({ onSelectNotice }) => {
  const topNotice = LATEST_NOTICES[0];

  return (
    <div className="bg-amber-50 border-y border-amber-200/80 px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <span className="inline-flex items-center gap-1 bg-[#003822] text-white text-[11px] font-bold px-2.5 py-1 rounded-sm tracking-wide uppercase shrink-0 shadow-xs">
            <Bell className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
            Latest Notice
          </span>
          <div 
            onClick={() => onSelectNotice(topNotice)}
            className="truncate text-slate-800 font-medium hover:text-emerald-800 cursor-pointer flex items-center gap-1.5 transition-colors"
          >
            <span className="text-red-600 font-bold shrink-0">[Important]</span>
            <span className="truncate">{topNotice.title}</span>
            <span className="text-xs text-slate-500 shrink-0 hidden sm:inline">({topNotice.date})</span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button 
            onClick={() => onSelectNotice(topNotice)}
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-0.5 underline underline-offset-2"
          >
            <span>Read Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
