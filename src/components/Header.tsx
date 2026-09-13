import React, { useState } from 'react';
import { 
  GraduationCap, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ExternalLink,
  BookOpen,
  Calendar,
  FileText,
  Building2,
  HelpCircle
} from 'lucide-react';

interface HeaderProps {
  activeNav: string;
  onNavigate: (section: string) => void;
  onOpenDeptModal: () => void;
  onOpenAboutModal: () => void;
  onOpenContactModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeNav,
  onNavigate,
  onOpenDeptModal,
  onOpenAboutModal,
  onOpenContactModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setMobileMenuOpen(false);
    if (section === 'about') {
      onOpenAboutModal();
    } else if (section === 'departments') {
      onOpenDeptModal();
    } else if (section === 'contact') {
      onOpenContactModal();
    } else {
      onNavigate(section);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200">
      {/* Top Government & Contact Bar */}
      <div className="bg-[#003822] text-emerald-50 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Government of the People's Republic of Bangladesh
            </span>
            <span className="hidden md:inline text-emerald-300/60">|</span>
            <span className="hidden md:inline text-emerald-200 font-normal">
              Directorate of Technical Education (DTE) • BTEB Institute Code: 61016
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="tel:+880821713297" 
              className="flex items-center gap-1 text-emerald-100 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span className="hidden sm:inline">+880 821-713297</span>
            </a>
            <a 
              href="mailto:info@spi.gov.bd" 
              className="flex items-center gap-1 text-emerald-100 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-300" />
              <span className="hidden sm:inline">info@spi.gov.bd</span>
            </a>
            <div className="hidden lg:flex items-center gap-1 bg-[#0b4d32] px-2 py-0.5 rounded text-[11px] font-semibold text-emerald-200">
              <ShieldCheck className="w-3 h-3 text-emerald-300" />
              BTEB Accredited
            </div>
          </div>
        </div>
      </div>

      {/* Main Institute Brand Bar */}
      <div className="bg-gradient-to-r from-[#0d2238] via-[#0b2942] to-[#0d2238] text-white py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            onClick={() => handleNavClick('student-info')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            {/* SPI Monogram / Logo Seal */}
            <div className="relative w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white p-1 shadow-md border-2 border-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full rounded-full bg-[#003822] flex flex-col items-center justify-center text-center p-0.5 border border-emerald-400">
                <GraduationCap className="w-6 h-6 text-emerald-300" />
                <span className="text-[7px] font-bold uppercase tracking-tighter text-amber-300 leading-none mt-0.5">SPI 1955</span>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white p-0.5 rounded-full border border-white">
                <div className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></div>
              </div>
            </div>

            {/* Institution Typography */}
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-white font-serif group-hover:text-emerald-300 transition-colors">
                  SYLHET POLYTECHNIC INSTITUTE
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-emerald-300 font-medium tracking-wide">
                সিলেট পলিটেকনিক ইনস্টিটিউট, বাংলাদেশ
              </p>
              <p className="text-[11px] text-slate-300 hidden sm:block">
                Technical Road, Kazitula, Sylhet - 3100 | Estd: 1955 | Affiliated with BTEB
              </p>
            </div>
          </div>

          {/* Quick Academic Portal Badge on Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Academic Portal</div>
              <div className="text-sm font-bold text-white">Student Info System</div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="hidden lg:flex items-center space-x-1">
            <button
              id="nav-home-btn"
              onClick={() => handleNavClick('student-info')}
              className={`px-4 py-3 text-sm font-semibold transition-all border-b-2 ${
                activeNav === 'home'
                  ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50'
                  : 'border-transparent text-slate-700 hover:text-emerald-700 hover:border-emerald-400 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              id="nav-about-btn"
              onClick={() => handleNavClick('about')}
              className="px-4 py-3 text-sm font-semibold transition-all border-b-2 border-transparent text-slate-700 hover:text-emerald-700 hover:border-emerald-400 hover:bg-slate-50"
            >
              About Institute
            </button>

            <button
              id="nav-dept-btn"
              onClick={() => handleNavClick('departments')}
              className="px-4 py-3 text-sm font-semibold transition-all border-b-2 border-transparent text-slate-700 hover:text-emerald-700 hover:border-emerald-400 hover:bg-slate-50 flex items-center gap-1.5"
            >
              <Building2 className="w-4 h-4 text-emerald-600" />
              Departments
            </button>

            <button
              id="nav-student-info-btn"
              onClick={() => handleNavClick('student-info')}
              className={`px-4 py-3 text-sm font-bold transition-all border-b-2 flex items-center gap-2 ${
                activeNav === 'student-info'
                  ? 'border-emerald-600 text-emerald-800 bg-emerald-50'
                  : 'border-transparent text-slate-700 hover:text-emerald-700 hover:border-emerald-400 hover:bg-slate-50'
              }`}
            >
              <span>Student Info</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-emerald-600 text-white rounded-full">
                Active
              </span>
            </button>

            <button
              id="nav-resources-btn"
              onClick={() => handleNavClick('resources')}
              className={`px-4 py-3 text-sm font-semibold transition-all border-b-2 ${
                activeNav === 'resources'
                  ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50'
                  : 'border-transparent text-slate-700 hover:text-emerald-700 hover:border-emerald-400 hover:bg-slate-50'
              }`}
            >
              Student Resources
            </button>

            <button
              id="nav-notice-btn"
              onClick={() => handleNavClick('notice')}
              className={`px-4 py-3 text-sm font-semibold transition-all border-b-2 ${
                activeNav === 'notice'
                  ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50'
                  : 'border-transparent text-slate-700 hover:text-emerald-700 hover:border-emerald-400 hover:bg-slate-50'
              }`}
            >
              Notice Board
            </button>

            <button
              id="nav-contact-btn"
              onClick={() => handleNavClick('contact')}
              className="px-4 py-3 text-sm font-semibold transition-all border-b-2 border-transparent text-slate-700 hover:text-emerald-700 hover:border-emerald-400 hover:bg-slate-50"
            >
              Contact Us
            </button>
          </div>

          {/* Direct Resource Access Links */}
          <div className="hidden lg:flex items-center space-x-2 py-2">
            <button
              onClick={() => handleNavClick('resources')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-[#003822] text-white hover:bg-emerald-800 transition-colors shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-300" />
              Class & Exam Routine
            </button>
            <a
              href="http://www.btebresult.gov.bd"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-md border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <span>BTEB Result</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-slate-50 px-4 pt-2 pb-4 space-y-1">
            <button
              onClick={() => handleNavClick('student-info')}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-white hover:text-emerald-700"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-white hover:text-emerald-700"
            >
              About Institute
            </button>
            <button
              onClick={() => handleNavClick('departments')}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-white hover:text-emerald-700"
            >
              Departments
            </button>
            <button
              onClick={() => handleNavClick('student-info')}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-bold text-emerald-800 bg-emerald-100/70"
            >
              Student Info (Search Profile)
            </button>
            <button
              onClick={() => handleNavClick('resources')}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-white hover:text-emerald-700"
            >
              Student Resources & Routines
            </button>
            <button
              onClick={() => handleNavClick('notice')}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-white hover:text-emerald-700"
            >
              Notice Board
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-white hover:text-emerald-700"
            >
              Contact & Location
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
