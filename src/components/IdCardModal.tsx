import React from 'react';
import { X, Printer, GraduationCap, ShieldCheck, Download, Award, Check } from 'lucide-react';
import { Student } from '../types';

interface IdCardModalProps {
  student: Student;
  isOpen: boolean;
  onClose: () => void;
}

export const IdCardModal: React.FC<IdCardModalProps> = ({ student, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-[#003822] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-300" />
            <h3 className="text-base font-bold">Digital Student Identity Card</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable ID Card Container */}
        <div className="p-6 bg-slate-100/70 flex justify-center">
          <div 
            id="printable-student-id-card"
            className="w-full max-w-sm bg-white rounded-2xl shadow-lg border-2 border-[#003822] overflow-hidden relative"
          >
            {/* ID Card Top Banner */}
            <div className="bg-gradient-to-r from-[#003822] to-[#0d2238] text-white p-3 text-center relative border-b-2 border-amber-400">
              <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                Government of the People's Republic of Bangladesh
              </div>
              <div className="text-sm font-bold font-serif text-white tracking-wide">
                SYLHET POLYTECHNIC INSTITUTE
              </div>
              <div className="text-[10px] text-emerald-200 font-medium">
                সিলেট পলিটেকনিক ইনস্টিটিউট • Estd: 1955
              </div>
              <div className="text-[9px] text-slate-300">
                Technical Road, Kazitula, Sylhet - 3100
              </div>
            </div>

            {/* ID Card Body */}
            <div className="p-4 text-center">
              {/* Photo & Badge */}
              <div className="relative inline-block mb-3">
                <div className="w-24 h-28 rounded-lg overflow-hidden border-2 border-[#003822] mx-auto shadow-xs bg-slate-200">
                  <img
                    src={student.avatarUrl}
                    alt={student.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 right-1 bg-emerald-700 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs">
                  {student.shift}
                </div>
              </div>

              {/* Student Name */}
              <h4 className="text-base font-bold text-slate-900 tracking-tight">
                {student.name}
              </h4>
              {student.nameBn && (
                <p className="text-xs text-emerald-800 font-serif mb-2">
                  {student.nameBn}
                </p>
              )}

              {/* Technology */}
              <div className="bg-emerald-50 text-emerald-900 py-1 px-2 rounded-md font-bold text-xs border border-emerald-200 mb-3">
                {student.technology}
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-2 text-left text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-200 mb-3 font-medium">
                <div>
                  <span className="text-[10px] text-slate-600 block">Class Roll</span>
                  <span className="font-bold text-slate-900 font-mono">{student.roll}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-600 block">Registration No</span>
                  <span className="font-bold text-slate-900 font-mono">{student.registration}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-600 block">Semester</span>
                  <span className="font-bold text-slate-900">{student.semester}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-600 block">Academic Session</span>
                  <span className="font-bold text-slate-900">{student.session}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-600 block">Blood Group</span>
                  <span className="font-bold text-red-600">{student.bloodGroup}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-600 block">Emergency Phone</span>
                  <span className="font-bold text-slate-900 text-[11px]">{student.phone}</span>
                </div>
              </div>

              {/* Signature Blocks */}
              <div className="flex items-end justify-between px-2 pt-2 text-[10px] text-slate-500 border-t border-slate-200">
                <div className="text-center">
                  <div className="font-serif italic text-slate-700 mb-1">M. R. Ahmed</div>
                  <div className="border-t border-slate-400 pt-0.5 font-semibold text-[9px]">Student's Sign</div>
                </div>
                <div className="text-center">
                  <div className="font-serif italic text-emerald-800 font-bold mb-1">Principal</div>
                  <div className="border-t border-slate-400 pt-0.5 font-semibold text-[9px]">Principal / Seal</div>
                </div>
              </div>
            </div>

            {/* ID Card Footer */}
            <div className="bg-[#003822] text-white py-1.5 px-3 text-center text-[9px] font-mono">
              VALID TILL: 31 DEC 2026 • BTEB RECOGNIZED
            </div>
          </div>
        </div>

        {/* Modal Controls */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Official format for SPI campus entry & examination halls.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#003822] hover:bg-[#002818] text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-emerald-300" />
              <span>Print Card</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
