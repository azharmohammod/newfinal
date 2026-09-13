import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Globe, 
  ChevronRight,
  BookOpen,
  Calendar,
  FileText
} from 'lucide-react';

interface FooterProps {
  onNavigateSection: (section: string) => void;
  onOpenAbout: () => void;
  onOpenDept: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenAbout,
  onOpenDept,
  onOpenContact,
}) => {
  return (
    <footer className="bg-[#0b1b2b] text-slate-300 border-t-4 border-emerald-600 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Institute Overview & Emblem */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center shrink-0 border border-emerald-400">
                <div className="w-full h-full rounded-full bg-[#003822] flex flex-col items-center justify-center text-center">
                  <GraduationCap className="w-5 h-5 text-emerald-300" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
                  Sylhet Polytechnic Institute
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  সিলেট পলিটেকনিক ইনস্টিটিউট
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Established in 1955, Sylhet Polytechnic Institute is the premier government institution in north-eastern Bangladesh dedicated to excellence in engineering and polytechnic education under BTEB and DTE.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold bg-slate-900/60 p-2 rounded-lg border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>BTEB Institute Code: 61016</span>
            </div>
          </div>

          {/* Col 2: Campus Address & Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider pb-2 border-b border-slate-700/60">
              Campus & Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Technical Road, Kazitula, Sylhet - 3100, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+880821713297" className="hover:text-white transition-colors">
                  +880 821-713297, +880 821-716442
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@spi.gov.bd" className="hover:text-white transition-colors">
                  info@spi.gov.bd / principal@spi.gov.bd
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>www.spi.gov.bd (Official Portal)</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider pb-2 border-b border-slate-700/60">
              Student Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateSection('student-info')}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Student Information Lookup</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('resources')}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Class & Exam Routines</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDept}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Academic Departments</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('notice')}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Notice Board & Circulars</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>About Institute History</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Important Government & Board Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider pb-2 border-b border-slate-700/60">
              Important Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="http://www.bteb.gov.bd"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center justify-between group"
                >
                  <span>Bangladesh Technical Education Board (BTEB)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.techedu.gov.bd"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center justify-between group"
                >
                  <span>Directorate of Technical Education (DTE)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.moedu.gov.bd"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center justify-between group"
                >
                  <span>Ministry of Education, Bangladesh</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.btebresult.gov.bd"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center justify-between group"
                >
                  <span>BTEB Online Web Result Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://pmt.gov.bd"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center justify-between group"
                >
                  <span>PMT Technical Education Stipend Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} <strong>Sylhet Polytechnic Institute</strong>. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-slate-400">
            <span>Academic Portal v4.2</span>
            <span>•</span>
            <button onClick={onOpenContact} className="hover:text-emerald-300 transition-colors cursor-pointer">
              Helpline & Support
            </button>
            <span>•</span>
            <a href="#top" className="hover:text-emerald-300 transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
