import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  Check, 
  Calendar, 
  Building, 
  Clock, 
  Printer, 
  Share2, 
  CheckCircle2,
  ExternalLink,
  Shield
} from 'lucide-react';
import { ResourceItem, NoticeItem } from '../types';

interface ResourceModalProps {
  resource: ResourceItem | null;
  notice: NoticeItem | null;
  isOpen: boolean;
  onClose: () => void;
  onDownload: (item: ResourceItem) => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({
  resource,
  notice,
  isOpen,
  onClose,
  onDownload,
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen || (!resource && !notice)) return null;

  const title = resource ? resource.title : notice?.title;
  const category = resource ? resource.category.toUpperCase() : notice?.category.toUpperCase();
  const date = resource ? resource.date : notice?.date;
  const description = resource ? resource.description : notice?.summary;

  const handleDownload = () => {
    if (resource) {
      onDownload(resource);
    }
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Header */}
        <div className="bg-[#003822] text-white px-6 py-4 flex items-center justify-between border-b-2 border-emerald-400">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-300" />
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                Official Academic Document
              </span>
              <h3 className="text-base font-bold leading-tight">Document Inspection Viewer</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              {category}
            </span>
            <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {date}
            </span>
            {resource?.department && (
              <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 text-xs font-medium">
                {resource.department}
              </span>
            )}
            {resource && (
              <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                Format: {resource.fileType} ({resource.fileSize})
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-slate-900 leading-snug">
            {title}
          </h2>

          {/* Body Preview */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-sm text-slate-700 space-y-3 leading-relaxed">
            <p className="font-medium text-slate-800">
              {description}
            </p>
            
            <div className="pt-3 border-t border-slate-200/80 text-xs text-slate-500 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Verified by Academic Registry, Sylhet Polytechnic Institute</span>
              </div>
              <p>
                This electronic document is valid across all administrative, departmental, and examination sections for the current academic session (2025-2026).
              </p>
            </div>
          </div>

          {/* Detailed Instructions box */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-3.5 text-xs text-amber-900">
            <strong>Notice to Students:</strong> Please verify all subject codes and batch roll numbers. For any routine conflicts, contact the Head of the respective Department immediately.
          </div>
        </div>

        {/* Modal Action Controls */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Sylhet Polytechnic Institute, Bangladesh
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>

            {resource && (
              <button
                type="button"
                onClick={handleDownload}
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer ${
                  downloaded 
                    ? 'bg-emerald-700 text-white' 
                    : 'bg-[#003822] hover:bg-[#002818] text-white'
                }`}
              >
                {downloaded ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>File Downloaded</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-emerald-300" />
                    <span>{resource.fileType === 'LINK' ? 'Open Online Portal' : 'Download Document'}</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
