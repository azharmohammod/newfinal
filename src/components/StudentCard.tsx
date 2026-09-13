import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Printer, 
  Download, 
  FileText, 
  Calendar, 
  User, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Copy, 
  Check, 
  TrendingUp, 
  AlertCircle,
  Building,
  UserCheck
} from 'lucide-react';
import { Student } from '../types';

interface StudentCardProps {
  student: Student;
  onOpenIdModal: () => void;
  onDownloadSummary: () => void;
}

export const StudentCard: React.FC<StudentCardProps> = ({
  student,
  onOpenIdModal,
  onDownloadSummary,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'courses' | 'grades' | 'attendance'>('profile');
  const [copied, setCopied] = useState(false);

  const handleCopyRoll = () => {
    navigator.clipboard.writeText(`SPI Student - Name: ${student.name}, Roll: ${student.roll}, Reg: ${student.registration}, Tech: ${student.technology}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="student-card-container" className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden mb-12">
      {/* Official Institutional Card Header */}
      <div className="bg-gradient-to-r from-[#0d2238] via-[#0f2c4a] to-[#003822] p-4 sm:p-6 text-white border-b-4 border-emerald-500">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-white/10 border border-white/20">
              <GraduationCap className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                  Diploma In Engineering
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-xs text-slate-300 font-medium">BTEB Affiliation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                Official Student Record Card
              </h3>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/50 px-3.5 py-1.5 rounded-lg">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="text-[10px] uppercase font-bold text-emerald-200 tracking-wider">Status</div>
              <div className="text-xs font-bold text-emerald-300 flex items-center gap-1">
                <span>BTEB Verified</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Student Header Information */}
      <div className="p-6 bg-slate-50/50 border-b border-slate-200">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Avatar and Shift Badge */}
          <div className="relative shrink-0 mx-auto md:mx-0">
            <div className="w-28 h-32 sm:w-32 sm:h-36 rounded-xl overflow-hidden border-2 border-emerald-600 shadow-sm bg-slate-200">
              <img
                src={student.avatarUrl}
                alt={student.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#003822] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs border border-white">
              {student.shift}
            </div>
          </div>

          {/* Key Student Identity Details */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1.5">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {student.name}
              </h2>
              {student.nameBn && (
                <span className="text-base font-serif text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {student.nameBn}
                </span>
              )}
            </div>

            <p className="text-base sm:text-lg font-semibold text-emerald-800 flex items-center justify-center md:justify-start gap-1.5 mb-3">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>{student.technology}</span>
              <span className="text-xs text-slate-500 font-normal">({student.department})</span>
            </p>

            {/* Quick Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl">
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Roll Number</span>
                <span className="text-base font-bold text-slate-900 font-mono">{student.roll}</span>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Registration No</span>
                <span className="text-base font-bold text-slate-900 font-mono">{student.registration}</span>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Current Semester</span>
                <span className="text-base font-bold text-emerald-800">{student.semester}</span>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Session</span>
                <span className="text-base font-bold text-slate-900">{student.session}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons Column */}
          <div className="w-full md:w-auto flex flex-row md:flex-col gap-2 shrink-0 justify-center">
            <button
              id="print-id-card-btn"
              type="button"
              onClick={onOpenIdModal}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#003822] hover:bg-[#002818] text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-emerald-300" />
              <span>Print Student ID</span>
            </button>

            <button
              id="download-summary-btn"
              type="button"
              onClick={onDownloadSummary}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-bold rounded-lg transition-colors shadow-2xs cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>Download Record</span>
            </button>

            <button
              type="button"
              onClick={handleCopyRoll}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors cursor-pointer"
              title="Copy details to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Info'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-slate-200 bg-white px-6">
        <div className="flex space-x-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3.5 text-sm font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'profile'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Academic & Personal Profile</span>
          </button>

          <button
            onClick={() => setActiveTab('courses')}
            className={`py-3.5 text-sm font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'courses'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Enrolled Subjects ({student.subjects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('grades')}
            className={`py-3.5 text-sm font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'grades'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Semester Results & CGPA</span>
          </button>

          <button
            onClick={() => setActiveTab('attendance')}
            className={`py-3.5 text-sm font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'attendance'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Attendance & Dues</span>
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="p-6">
        {/* Tab 1: Academic & Personal Profile */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Core Academic Information */}
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200/80">
              <h4 className="text-sm font-bold text-[#0d2238] uppercase tracking-wider mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                Academic Enrollment Details
              </h4>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold text-slate-600">Technology Code</dt>
                  <dd className="font-semibold text-slate-900">{student.technologyCode} (CST)</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-600">Department</dt>
                  <dd className="font-semibold text-slate-900">{student.department}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-600">Shift & Section</dt>
                  <dd className="font-semibold text-slate-900">{student.shift}, {student.group || 'Group A'}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-600">Admission Session</dt>
                  <dd className="font-semibold text-slate-900">{student.admissionSession}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold text-slate-600">Curriculum Regulation</dt>
                  <dd className="font-semibold text-slate-900">{student.btebCurriculum}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold text-slate-600">Faculty Guide / Advisor</dt>
                  <dd className="font-semibold text-emerald-900">
                    {student.advisor.name}
                    <span className="block text-xs text-slate-500 font-normal">{student.advisor.designation}</span>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Personal & Guardian Information */}
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200/80">
              <h4 className="text-sm font-bold text-[#0d2238] uppercase tracking-wider mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-600" />
                Personal & Guardian Information
              </h4>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold text-slate-600">Father's Name</dt>
                  <dd className="font-semibold text-slate-900">{student.fatherName}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-600">Mother's Name</dt>
                  <dd className="font-semibold text-slate-900">{student.motherName}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-600">Date of Birth</dt>
                  <dd className="font-semibold text-slate-900">{student.dob}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-600">Blood Group</dt>
                  <dd className="font-bold text-red-600 bg-red-50 inline-block px-2 py-0.5 rounded border border-red-200">
                    {student.bloodGroup}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-600">Institutional Email</dt>
                  <dd className="font-semibold text-slate-900 text-xs font-mono">{student.email}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-600">Contact Number</dt>
                  <dd className="font-semibold text-slate-900">{student.phone}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold text-slate-600">Home District</dt>
                  <dd className="font-semibold text-slate-900 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{student.district}</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}

        {/* Tab 2: Enrolled Subjects */}
        {activeTab === 'courses' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Current Semester Subjects ({student.semester})
                </h4>
                <p className="text-xs text-slate-500">
                  Prescribed curriculum for {student.technology} under BTEB regulations.
                </p>
              </div>
              <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded">
                Total Credits: {student.subjects.reduce((acc, curr) => acc + curr.credit, 0)}
              </span>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0d2238] text-white text-xs font-semibold uppercase">
                  <tr>
                    <th className="py-3 px-4">Course Code</th>
                    <th className="py-3 px-4">Subject Title</th>
                    <th className="py-3 px-4 text-center">Credit</th>
                    <th className="py-3 px-4">Evaluation Type</th>
                    <th className="py-3 px-4 text-center">Current Grade</th>
                    <th className="py-3 px-4 text-center">Grade Point</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {student.subjects.map((sub, idx) => (
                    <tr key={sub.code} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                      <td className="py-3 px-4 font-mono font-bold text-emerald-800">{sub.code}</td>
                      <td className="py-3 px-4 font-medium text-slate-900">{sub.name}</td>
                      <td className="py-3 px-4 text-center font-semibold text-slate-700">{sub.credit}</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2 py-0.5 text-xs rounded bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                          {sub.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-block px-2.5 py-0.5 text-xs font-bold rounded bg-emerald-100 text-emerald-800">
                          {sub.grade || 'A+'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-slate-900">
                        {sub.gradePoint ? sub.gradePoint.toFixed(2) : '4.00'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Semester Results & CGPA History */}
        {activeTab === 'grades' && (
          <div>
            {/* CGPA Summary Metric Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#003822] text-white flex items-center justify-center font-bold text-xl shadow-xs">
                  {student.cgpa.toFixed(2)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                    Cumulative Grade Point Average (CGPA)
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">
                    Excellent Academic Standing (First Class)
                  </h4>
                  <p className="text-xs text-slate-600">
                    Graded on a 4.00 Scale as per BTEB Diploma in Engineering standards.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center gap-1 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  All Previous Semesters Passed
                </span>
              </div>
            </div>

            {/* Semester-by-Semester Breakdown */}
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Semester-wise GPA Progression Record
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {student.semesterResults.map((res) => (
                <div 
                  key={res.semester}
                  className={`p-3.5 rounded-lg border text-center transition-shadow ${
                    res.status === 'In Progress' 
                      ? 'bg-amber-50/60 border-amber-300' 
                      : 'bg-white border-slate-200 shadow-2xs hover:shadow-xs'
                  }`}
                >
                  <span className="text-xs font-bold text-slate-600 block mb-1">{res.semester}</span>
                  <div className="text-xl font-bold font-mono text-[#003822] mb-1">
                    {res.gpa.toFixed(2)}
                  </div>
                  <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    res.status === 'Passed' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {res.status}
                  </span>
                  <span className="text-[10px] text-slate-600 block mt-1">{res.session}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Attendance & Fees Status */}
        {activeTab === 'attendance' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Attendance Metric */}
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                Current Semester Attendance Ratio
              </h4>
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-xl border-4 border-emerald-600">
                  {student.attendance.percentage}%
                </div>
                <div className="space-y-1 text-sm">
                  <div className="font-semibold text-slate-900">
                    {student.attendance.presentDays} Days Present out of {student.attendance.totalDays} Working Days
                  </div>
                  <p className="text-xs text-emerald-700 font-medium">
                    ✓ Above mandatory 75% BTEB Exam Eligibility Threshold.
                  </p>
                  <span className="inline-block text-[11px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                    Admit Card Qualified
                  </span>
                </div>
              </div>
            </div>

            {/* Fees & Clearance Status */}
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Semester Accounts & Lab Clearance
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-2.5 bg-white rounded border border-slate-200">
                  <span className="text-slate-600 font-medium">Semester Tuition Fee</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Cleared / Paid</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-white rounded border border-slate-200">
                  <span className="text-slate-600 font-medium">Laboratory & Workshop Dues</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">No Dues (Cleared)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-white rounded border border-slate-200">
                  <span className="text-slate-600 font-medium">Central Library Books Status</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">All Returned</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Card Footer Verification Bar */}
      <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Digital Registry ID: <strong className="font-mono text-slate-700">{student.id}</strong></span>
        </div>
        <div>
          <span>Last Synchronized: <strong>September 2026 (Active Session)</strong></span>
        </div>
      </div>
    </div>
  );
};
