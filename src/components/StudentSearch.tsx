import React, { useState } from 'react';
import { 
  Search, 
  RotateCcw, 
  UserCheck, 
  Sparkles, 
  Filter, 
  AlertCircle,
  HelpCircle,
  Hash,
  Award
} from 'lucide-react';
import { Student } from '../types';
import { SAMPLE_STUDENTS } from '../data/mockData';

interface StudentSearchProps {
  onSearch: (query: string, department?: string, semester?: string) => void;
  onSelectStudent: (student: Student) => void;
  selectedStudent: Student | null;
  totalStudents: number;
}

export const StudentSearch: React.FC<StudentSearchProps> = ({
  onSearch,
  onSelectStudent,
  selectedStudent,
  totalStudents,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedSemester, setSelectedSemester] = useState('All');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery.trim(), selectedDept, selectedSemester);
  };

  const handleQuickSelect = (roll: string) => {
    setSearchQuery(roll);
    const found = SAMPLE_STUDENTS.find(s => s.roll === roll);
    if (found) {
      onSelectStudent(found);
    } else {
      onSearch(roll, 'All', 'All');
    }
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedDept('All');
    setSelectedSemester('All');
    onSearch('', 'All', 'All');
  };

  return (
    <section className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden mb-8">
      {/* Top Banner with Academic Motif */}
      <div className="bg-gradient-to-r from-[#003822] via-[#0d4a30] to-[#0d2238] p-6 text-white">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold backdrop-blur-xs mb-3 border border-white/10">
            <Award className="w-3.5 h-3.5 text-emerald-300" />
            BTEB Academic Registry & Verification System
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Student Information
          </h2>
          <p className="mt-1 text-emerald-100 text-sm sm:text-base leading-relaxed">
            Search official student profile, verify registration status, and inspect academic records, semester grades, and class enrollment details.
          </p>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="p-5 sm:p-6 bg-slate-50/70 border-b border-slate-200">
        <form onSubmit={handleSearchSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Primary Search Input */}
            <div className="md:col-span-6 relative">
              <label 
                htmlFor="student-search-input" 
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Search by Roll or Registration Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="h-5 w-5 text-emerald-700" />
                </div>
                <input
                  id="student-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter 6-digit Roll (e.g. 123456) or Reg (2022-123456)..."
                  className="w-full pl-10 pr-10 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs transition"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Department Filter */}
            <div className="md:col-span-3">
              <label 
                htmlFor="dept-filter" 
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Technology / Dept
              </label>
              <select
                id="dept-filter"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full py-3 px-3 bg-white border border-slate-300 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs"
              >
                <option value="All">All Technologies</option>
                <option value="Computer">Computer Science & Tech</option>
                <option value="Civil">Civil Technology</option>
                <option value="Electrical">Electrical Technology</option>
                <option value="Mechanical">Mechanical Technology</option>
                <option value="Electro-Medical">Electro-Medical Tech</option>
              </select>
            </div>

            {/* Semester Filter */}
            <div className="md:col-span-3">
              <label 
                htmlFor="semester-filter" 
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Semester
              </label>
              <select
                id="semester-filter"
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full py-3 px-3 bg-white border border-slate-300 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs"
              >
                <option value="All">All Semesters</option>
                <option value="1st">1st Semester</option>
                <option value="2nd">2nd Semester</option>
                <option value="3rd">3rd Semester</option>
                <option value="4th">4th Semester</option>
                <option value="5th">5th Semester</option>
                <option value="6th">6th Semester</option>
                <option value="7th">7th Semester</option>
                <option value="8th">8th Semester</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2">
              <button
                id="search-submit-btn"
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#003822] hover:bg-[#002919] text-white text-sm font-bold rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search Student Record</span>
              </button>

              <button
                id="search-reset-btn"
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-slate-500" />
                <span>Reset</span>
              </button>
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-1">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span>Loaded <strong>{totalStudents} verified students</strong> in demonstration registry</span>
            </div>
          </div>
        </form>

        {/* Quick Sample Students Picker */}
        <div className="mt-4 pt-4 border-t border-slate-200/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Quick Demo Samples:
            </span>
            {SAMPLE_STUDENTS.map((st) => (
              <button
                key={st.id}
                type="button"
                onClick={() => handleQuickSelect(st.roll)}
                className={`text-xs px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer border ${
                  selectedStudent?.roll === st.roll
                    ? 'bg-[#003822] text-white border-[#003822] shadow-xs'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-emerald-600 hover:text-emerald-700 hover:bg-emerald-50/50'
                }`}
              >
                <span className="font-semibold">{st.name.split(' ')[1] || st.name}</span>
                <span className="ml-1 text-[11px] opacity-75 font-mono">({st.roll})</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
