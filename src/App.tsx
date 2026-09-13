import React, { useState } from 'react';
import { Header } from './components/Header';
import { NoticeTicker } from './components/NoticeTicker';
import { StudentSearch } from './components/StudentSearch';
import { StudentCard } from './components/StudentCard';
import { StudentResources } from './components/StudentResources';
import { NoticeBoardSection } from './components/NoticeBoardSection';
import { Footer } from './components/Footer';
import { IdCardModal } from './components/IdCardModal';
import { ResourceModal } from './components/ResourceModal';
import { AboutModal, DepartmentsModal, ContactModal } from './components/InfoModals';
import { SAMPLE_STUDENTS } from './data/mockData';
import { Student, ResourceItem, NoticeItem } from './types';
import { CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function App() {
  const [studentsList, setStudentsList] = useState<Student[]>(SAMPLE_STUDENTS);
  // Default to requested sample student: Md. Rahim Ahmed (Roll: 123456)
  const [selectedStudent, setSelectedStudent] = useState<Student>(SAMPLE_STUDENTS[0]);
  const [activeNav, setActiveNav] = useState<string>('student-info');
  const [searchNotFound, setSearchNotFound] = useState<boolean>(false);

  // Modals state
  const [isIdCardOpen, setIsIdCardOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isDeptOpen, setIsDeptOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleSearch = (query: string, department?: string, semester?: string) => {
    setSearchNotFound(false);
    
    if (!query && (!department || department === 'All') && (!semester || semester === 'All')) {
      setSelectedStudent(SAMPLE_STUDENTS[0]);
      return;
    }

    const cleanQuery = query.toLowerCase().trim();

    const matches = SAMPLE_STUDENTS.filter(s => {
      const matchRoll = s.roll.toLowerCase().includes(cleanQuery);
      const matchReg = s.registration.toLowerCase().includes(cleanQuery);
      const matchName = s.name.toLowerCase().includes(cleanQuery);
      
      const matchDept = !department || department === 'All' || 
        s.technology.toLowerCase().includes(department.toLowerCase()) || 
        s.department.toLowerCase().includes(department.toLowerCase());

      const matchSem = !semester || semester === 'All' || 
        s.semester.toLowerCase().includes(semester.toLowerCase());

      if (cleanQuery) {
        return (matchRoll || matchReg || matchName) && matchDept && matchSem;
      }
      return matchDept && matchSem;
    });

    if (matches.length > 0) {
      setSelectedStudent(matches[0]);
      setSearchNotFound(false);
      // Smoothly scroll to student card
      const el = document.getElementById('student-card-container');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } else {
      setSearchNotFound(true);
    }
  };

  const handleNavigation = (section: string) => {
    setActiveNav(section);
    if (section === 'student-info') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'resources') {
      const el = document.getElementById('student-resources-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'notice') {
      const el = document.getElementById('notice-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreviewResource = (item: ResourceItem) => {
    setSelectedNotice(null);
    setSelectedResource(item);
  };

  const handleSelectNotice = (notice: NoticeItem) => {
    setSelectedResource(null);
    setSelectedNotice(notice);
  };

  const handleDownloadResource = (item: ResourceItem) => {
    showToast(`Downloading "${item.title}" (${item.fileType})... Complete!`);
  };

  const handleDownloadStudentSummary = () => {
    showToast(`Generating Academic Verification Summary for ${selectedStudent.name} (Roll: ${selectedStudent.roll})... Ready!`);
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-emerald-600 selection:text-white">
      {/* 1. Header Section */}
      <Header
        activeNav={activeNav}
        onNavigate={handleNavigation}
        onOpenAboutModal={() => setIsAboutOpen(true)}
        onOpenDeptModal={() => setIsDeptOpen(true)}
        onOpenContactModal={() => setIsContactOpen(true)}
      />

      {/* Emergency Notice Ticker */}
      <NoticeTicker onSelectNotice={handleSelectNotice} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* 2. Student Info Section */}
        <div id="student-info-section">
          {/* Search Box */}
          <StudentSearch
            onSearch={handleSearch}
            onSelectStudent={(st) => {
              setSelectedStudent(st);
              setSearchNotFound(false);
            }}
            selectedStudent={selectedStudent}
            totalStudents={SAMPLE_STUDENTS.length}
          />

          {/* Search Not Found Alert */}
          {searchNotFound && (
            <div className="mb-8 p-6 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm">No Student Record Matched Your Search</h4>
                <p className="text-xs text-amber-800 mt-1">
                  Please verify the roll number or registration number format. You can click any of the <strong>Quick Demo Samples</strong> above (such as <strong>Roll: 123456</strong> for Md. Rahim Ahmed) to view sample records.
                </p>
              </div>
            </div>
          )}

          {/* Student Information Card */}
          {selectedStudent && (
            <StudentCard
              student={selectedStudent}
              onOpenIdModal={() => setIsIdCardOpen(true)}
              onDownloadSummary={handleDownloadStudentSummary}
            />
          )}
        </div>

        {/* 3. Student Resources Section */}
        <StudentResources
          onPreviewResource={handlePreviewResource}
          onDownloadResource={handleDownloadResource}
        />

        {/* 4. Notice Board Section */}
        <NoticeBoardSection onSelectNotice={handleSelectNotice} />
      </main>

      {/* 5. Footer Section */}
      <Footer
        onNavigateSection={handleNavigation}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenDept={() => setIsDeptOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Modals */}
      <IdCardModal
        student={selectedStudent}
        isOpen={isIdCardOpen}
        onClose={() => setIsIdCardOpen(false)}
      />

      <ResourceModal
        resource={selectedResource}
        notice={selectedNotice}
        isOpen={!!selectedResource || !!selectedNotice}
        onClose={() => {
          setSelectedResource(null);
          setSelectedNotice(null);
        }}
        onDownload={handleDownloadResource}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <DepartmentsModal
        isOpen={isDeptOpen}
        onClose={() => setIsDeptOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Toast Notification Bar */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#003822] text-white px-5 py-3 rounded-xl shadow-xl border border-emerald-400 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
