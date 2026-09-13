import { Student, ResourceItem, NoticeItem, DepartmentInfo } from '../types';

export const SAMPLE_STUDENTS: Student[] = [
  {
    id: 'spi-2022-123456',
    name: 'Md. Rahim Ahmed',
    nameBn: 'মো: রহিম আহমেদ',
    roll: '123456',
    registration: '2022-123456',
    technology: 'Computer Science & Technology',
    technologyCode: '685',
    department: 'Department of Computer Technology',
    semester: '6th Semester',
    session: '2022–2023',
    shift: '1st Shift',
    group: 'Group A',
    status: 'Regular',
    cgpa: 3.84,
    bloodGroup: 'B+',
    fatherName: 'Md. Abdul Karim',
    motherName: 'Rahima Begum',
    email: 'rahim.ahmed123456@spi.gov.bd',
    phone: '+880 1712-345678',
    dob: '14 August 2004',
    district: 'Sylhet Sadar, Sylhet',
    admissionSession: '2022-2023',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    btebCurriculum: 'Diploma in Engineering (Probiddhan-2022)',
    advisor: {
      name: 'Engr. Mohammad Mahbubul Alam',
      designation: 'Senior Instructor & Head, Computer Dept',
      phone: '+880 1819-234567'
    },
    attendance: {
      percentage: 92,
      presentDays: 83,
      totalDays: 90
    },
    feesStatus: {
      isPaid: true,
      dueAmount: 0,
      lastPaymentDate: '12 February 2026'
    },
    subjects: [
      { code: '66661', name: 'Database Management Systems', credit: 4, type: 'Theory + Practical', grade: 'A+', gradePoint: 4.0 },
      { code: '66662', name: 'Web Development & Frameworks', credit: 4, type: 'Theory + Practical', grade: 'A+', gradePoint: 4.0 },
      { code: '66663', name: 'Operating System Design', credit: 3, type: 'Theory + Practical', grade: 'A', gradePoint: 3.75 },
      { code: '66664', name: 'Microprocessor & Microcontrollers', credit: 3, type: 'Theory + Practical', grade: 'A-', gradePoint: 3.5 },
      { code: '66665', name: 'Network Administration & Cloud', credit: 3, type: 'Theory + Practical', grade: 'A+', gradePoint: 4.0 },
      { code: '65851', name: 'Industrial Management & Accounting', credit: 2, type: 'Theory', grade: 'A', gradePoint: 3.75 }
    ],
    semesterResults: [
      { semester: '1st Semester', gpa: 3.78, status: 'Passed', session: '2022-2023' },
      { semester: '2nd Semester', gpa: 3.82, status: 'Passed', session: '2022-2023' },
      { semester: '3rd Semester', gpa: 3.89, status: 'Passed', session: '2023-2024' },
      { semester: '4th Semester', gpa: 3.85, status: 'Passed', session: '2023-2024' },
      { semester: '5th Semester', gpa: 3.86, status: 'Passed', session: '2024-2025' },
      { semester: '6th Semester', gpa: 3.84, status: 'In Progress', session: '2025-2026' }
    ]
  },
  {
    id: 'spi-2022-654321',
    name: 'Nusrat Jahan Chowdhury',
    nameBn: 'নুসরাত জাহান চৌধুরী',
    roll: '654321',
    registration: '2022-654321',
    technology: 'Civil Technology',
    technologyCode: '664',
    department: 'Department of Civil Engineering',
    semester: '4th Semester',
    session: '2023–2024',
    shift: '1st Shift',
    group: 'Group B',
    status: 'Regular',
    cgpa: 3.91,
    bloodGroup: 'O+',
    fatherName: 'Late Anisur Rahman Chowdhury',
    motherName: 'Jannatul Ferdous',
    email: 'nusrat.jahan654321@spi.gov.bd',
    phone: '+880 1798-765432',
    dob: '02 November 2005',
    district: 'Moulvibazar, Sylhet',
    admissionSession: '2023-2024',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    btebCurriculum: 'Diploma in Engineering (Probiddhan-2022)',
    advisor: {
      name: 'Engr. Kazi Tariqul Islam',
      designation: 'Chief Instructor, Civil Dept',
      phone: '+880 1711-890123'
    },
    attendance: {
      percentage: 96,
      presentDays: 86,
      totalDays: 90
    },
    feesStatus: {
      isPaid: true,
      dueAmount: 0,
      lastPaymentDate: '05 January 2026'
    },
    subjects: [
      { code: '66441', name: 'Structural Mechanics', credit: 4, type: 'Theory + Practical', grade: 'A+', gradePoint: 4.0 },
      { code: '66442', name: 'Surveying-II', credit: 4, type: 'Theory + Practical', grade: 'A+', gradePoint: 4.0 },
      { code: '66443', name: 'Civil Engineering Drawing-II (CAD)', credit: 3, type: 'Practical', grade: 'A+', gradePoint: 4.0 },
      { code: '66444', name: 'Estimating & Costing-I', credit: 3, type: 'Theory + Practical', grade: 'A', gradePoint: 3.75 }
    ],
    semesterResults: [
      { semester: '1st Semester', gpa: 3.88, status: 'Passed', session: '2023-2024' },
      { semester: '2nd Semester', gpa: 3.92, status: 'Passed', session: '2023-2024' },
      { semester: '3rd Semester', gpa: 3.93, status: 'Passed', session: '2024-2025' },
      { semester: '4th Semester', gpa: 3.91, status: 'In Progress', session: '2025-2026' }
    ]
  },
  {
    id: 'spi-2021-789012',
    name: 'Tanvir Hasan Shanto',
    nameBn: 'তানভীর হাসান শান্ত',
    roll: '789012',
    registration: '2021-789012',
    technology: 'Electrical Technology',
    technologyCode: '667',
    department: 'Department of Electrical Engineering',
    semester: '7th Semester',
    session: '2021–2022',
    shift: '2nd Shift',
    group: 'Group A',
    status: 'Regular',
    cgpa: 3.68,
    bloodGroup: 'A+',
    fatherName: 'Md. Sirajul Islam',
    motherName: 'Nazma Begum',
    email: 'tanvir.hasan789012@spi.gov.bd',
    phone: '+880 1834-567890',
    dob: '19 March 2003',
    district: 'Habiganj, Sylhet',
    admissionSession: '2021-2022',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    btebCurriculum: 'Diploma in Engineering (Probiddhan-2016)',
    advisor: {
      name: 'Engr. Md. Faruk Ahmed',
      designation: 'Instructor, Electrical Dept',
      phone: '+880 1715-456789'
    },
    attendance: {
      percentage: 88,
      presentDays: 79,
      totalDays: 90
    },
    feesStatus: {
      isPaid: true,
      dueAmount: 0,
      lastPaymentDate: '10 January 2026'
    },
    subjects: [
      { code: '66771', name: 'Power Plant Engineering', credit: 4, type: 'Theory + Practical', grade: 'A', gradePoint: 3.75 },
      { code: '66772', name: 'Switchgear & Protection', credit: 4, type: 'Theory + Practical', grade: 'A-', gradePoint: 3.5 },
      { code: '66773', name: 'AC Machines-II', credit: 3, type: 'Theory + Practical', grade: 'A', gradePoint: 3.75 }
    ],
    semesterResults: [
      { semester: '1st Semester', gpa: 3.60, status: 'Passed', session: '2021-2022' },
      { semester: '2nd Semester', gpa: 3.65, status: 'Passed', session: '2021-2022' },
      { semester: '3rd Semester', gpa: 3.70, status: 'Passed', session: '2022-2023' },
      { semester: '4th Semester', gpa: 3.72, status: 'Passed', session: '2022-2023' },
      { semester: '5th Semester', gpa: 3.69, status: 'Passed', session: '2023-2024' },
      { semester: '6th Semester', gpa: 3.71, status: 'Passed', session: '2024-2025' },
      { semester: '7th Semester', gpa: 3.68, status: 'In Progress', session: '2025-2026' }
    ]
  },
  {
    id: 'spi-2022-554433',
    name: 'Farhana Akter Ritu',
    nameBn: 'ফারহানা আক্তার ঋতু',
    roll: '554433',
    registration: '2022-554433',
    technology: 'Electro-Medical Technology',
    technologyCode: '686',
    department: 'Department of Electro-Medical Engineering',
    semester: '5th Semester',
    session: '2022–2023',
    shift: '1st Shift',
    group: 'Group A',
    status: 'Regular',
    cgpa: 3.94,
    bloodGroup: 'AB+',
    fatherName: 'Dr. Shah Alam',
    motherName: 'Rokeya Sultana',
    email: 'farhana.akter554433@spi.gov.bd',
    phone: '+880 1912-112233',
    dob: '10 July 2004',
    district: 'Sunamganj, Sylhet',
    admissionSession: '2022-2023',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    btebCurriculum: 'Diploma in Engineering (Probiddhan-2022)',
    advisor: {
      name: 'Engr. Shamima Nasrin',
      designation: 'Senior Instructor, Electro-Medical Dept',
      phone: '+880 1817-998877'
    },
    attendance: {
      percentage: 95,
      presentDays: 85,
      totalDays: 90
    },
    feesStatus: {
      isPaid: true,
      dueAmount: 0,
      lastPaymentDate: '15 January 2026'
    },
    subjects: [
      { code: '68651', name: 'Biomedical Instrumentation-I', credit: 4, type: 'Theory + Practical', grade: 'A+', gradePoint: 4.0 },
      { code: '68652', name: 'Clinical Engineering', credit: 3, type: 'Theory + Practical', grade: 'A+', gradePoint: 4.0 },
      { code: '68653', name: 'Medical Imaging Technology', credit: 4, type: 'Theory + Practical', grade: 'A+', gradePoint: 4.0 }
    ],
    semesterResults: [
      { semester: '1st Semester', gpa: 3.90, status: 'Passed', session: '2022-2023' },
      { semester: '2nd Semester', gpa: 3.94, status: 'Passed', session: '2022-2023' },
      { semester: '3rd Semester', gpa: 3.96, status: 'Passed', session: '2023-2024' },
      { semester: '4th Semester', gpa: 3.95, status: 'Passed', session: '2024-2025' },
      { semester: '5th Semester', gpa: 3.94, status: 'In Progress', session: '2025-2026' }
    ]
  },
  {
    id: 'spi-2023-332211',
    name: 'Shahriar Mahmud',
    nameBn: 'শাহরিয়ার মাহমুদ',
    roll: '332211',
    registration: '2023-332211',
    technology: 'Mechanical Technology',
    technologyCode: '670',
    department: 'Department of Mechanical Engineering',
    semester: '3rd Semester',
    session: '2023–2024',
    shift: '2nd Shift',
    group: 'Group B',
    status: 'Regular',
    cgpa: 3.72,
    bloodGroup: 'O-',
    fatherName: 'Mahmudur Rahman',
    motherName: 'Salma Khatun',
    email: 'shahriar.mahmud332211@spi.gov.bd',
    phone: '+880 1678-990011',
    dob: '08 December 2005',
    district: 'Sylhet Sadar, Sylhet',
    admissionSession: '2023-2024',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    btebCurriculum: 'Diploma in Engineering (Probiddhan-2022)',
    advisor: {
      name: 'Engr. Dewan Md. Nasir',
      designation: 'Instructor, Mechanical Dept',
      phone: '+880 1712-887766'
    },
    attendance: {
      percentage: 89,
      presentDays: 80,
      totalDays: 90
    },
    feesStatus: {
      isPaid: true,
      dueAmount: 0,
      lastPaymentDate: '20 January 2026'
    },
    subjects: [
      { code: '67031', name: 'Machine Shop Practice-II', credit: 4, type: 'Practical', grade: 'A', gradePoint: 3.75 },
      { code: '67032', name: 'Thermodynamics & Heat Engines', credit: 4, type: 'Theory + Practical', grade: 'A', gradePoint: 3.75 },
      { code: '67033', name: 'Strength of Materials', credit: 3, type: 'Theory + Practical', grade: 'A-', gradePoint: 3.5 }
    ],
    semesterResults: [
      { semester: '1st Semester', gpa: 3.68, status: 'Passed', session: '2023-2024' },
      { semester: '2nd Semester', gpa: 3.74, status: 'Passed', session: '2023-2024' },
      { semester: '3rd Semester', gpa: 3.72, status: 'In Progress', session: '2024-2025' }
    ]
  }
];

export const RESOURCES_DATA: ResourceItem[] = [
  // Class Routines
  {
    id: 'res-routine-cst-6th',
    title: 'Class Routine 2026 - Computer Technology (6th Semester, 1st & 2nd Shift)',
    category: 'routine',
    department: 'Computer Science & Technology',
    semester: '6th Semester',
    date: '10 Feb 2026',
    fileSize: '1.4 MB',
    fileType: 'PDF',
    isNew: true,
    description: 'Updated class schedule including theory lectures, lab sessions (Software Lab-1 & Microprocessor Lab), and library hours.'
  },
  {
    id: 'res-routine-civil-4th',
    title: 'Class Routine 2026 - Civil Technology (4th Semester, Both Shifts)',
    category: 'routine',
    department: 'Civil Technology',
    semester: '4th Semester',
    date: '08 Feb 2026',
    fileSize: '1.2 MB',
    fileType: 'PDF',
    description: 'Complete field surveying schedule, CAD drafting studio hours, and theoretical class routine.'
  },
  {
    id: 'res-routine-elec-7th',
    title: 'Class Routine 2026 - Electrical Technology (7th Semester Shift 1 & 2)',
    category: 'routine',
    department: 'Electrical Technology',
    semester: '7th Semester',
    date: '05 Feb 2026',
    fileSize: '1.1 MB',
    fileType: 'PDF',
    description: 'Power transmission lab slotting, machine lab allocations, and sub-station visit timings.'
  },
  {
    id: 'res-routine-all-1st',
    title: 'Master Academic Class Routine - 1st Semester All Technologies (Spring 2026)',
    category: 'routine',
    department: 'All Departments',
    semester: '1st Semester',
    date: '01 Feb 2026',
    fileSize: '3.8 MB',
    fileType: 'PDF',
    description: 'Combined foundational class schedule for newly admitted diploma engineering students.'
  },

  // Exam Routines
  {
    id: 'res-exam-bteb-final-2026',
    title: 'BTEB Diploma in Engineering Semester Final Board Examination Schedule - 2026',
    category: 'exam',
    department: 'All Departments',
    semester: 'All Semesters (2nd, 4th, 6th, 8th)',
    date: '14 Feb 2026',
    fileSize: '2.5 MB',
    fileType: 'PDF',
    isNew: true,
    description: 'Official centralized board routine published by Bangladesh Technical Education Board (BTEB), Dhaka.'
  },
  {
    id: 'res-exam-midterm-spring',
    title: 'Mid-Term & Continuous Assessment Schedule - Spring Semester 2026',
    category: 'exam',
    department: 'All Departments',
    semester: 'All Semesters',
    date: '02 Feb 2026',
    fileSize: '890 KB',
    fileType: 'PDF',
    description: 'Institutional internal examination schedule with room allocations and roll range split.'
  },
  {
    id: 'res-exam-practical-2026',
    title: 'Practical Board Exam & Viva-Voce Center Guidelines - SPI Sylhet Center',
    category: 'exam',
    department: 'All Departments',
    semester: 'Odd & Even Semesters',
    date: '28 Jan 2026',
    fileSize: '1.6 MB',
    fileType: 'PDF',
    description: 'Laboratory assessment protocols, external examiner panel list, and submission guidelines for practical notebooks.'
  },

  // Results
  {
    id: 'res-result-bteb-5th',
    title: 'BTEB 5th Semester Final Examination Result Sheet (Session 2024-2025)',
    category: 'result',
    department: 'All Departments',
    semester: '5th Semester',
    date: '18 Jan 2026',
    fileSize: '4.2 MB',
    fileType: 'PDF',
    isNew: true,
    description: 'Official institute-wide tabulated result sheet with GPA, subject-wise GP, and board merit ranking.'
  },
  {
    id: 'res-result-recheck-2025',
    title: 'BTEB Re-scrutiny (Khata Re-check) Published Results for Diploma Exams',
    category: 'result',
    department: 'All Departments',
    semester: '1st - 7th Semesters',
    date: '11 Jan 2026',
    fileSize: '750 KB',
    fileType: 'PDF',
    description: 'List of corrected grades and updated GPA for students who applied for paper re-scrutiny.'
  },
  {
    id: 'res-result-portal-link',
    title: 'BTEB Online Web Result Portal (Individual Marksheet & Grade Query)',
    category: 'result',
    department: 'BTEB Central',
    date: 'Live Portal',
    fileSize: 'Web Link',
    fileType: 'LINK',
    description: 'Direct access to btebresult.gov.bd for online automated transcript and semester grade card downloads.'
  },

  // Notices
  {
    id: 'res-notice-stipend-2026',
    title: 'Notice: Application for DTE & Female Student Technical Education Stipend',
    category: 'notice',
    department: 'Student Affairs',
    date: '12 Feb 2026',
    fileSize: '950 KB',
    fileType: 'PDF',
    isNew: true,
    description: 'Eligibility criteria, Nagad/bKash mobile banking verification requirement, and deadline for stipend renewal.'
  },
  {
    id: 'res-notice-internship-attachment',
    title: 'Industrial Training & 8th Semester Internship Placement Allocation List',
    category: 'notice',
    department: 'Training & Placement Cell',
    date: '07 Feb 2026',
    fileSize: '2.1 MB',
    fileType: 'PDF',
    description: 'Company allocations for industrial attachment across Dhaka, Chittagong, and Sylhet industrial zones.'
  },
  {
    id: 'res-notice-bteb-reg-deadline',
    title: 'BTEB Registration Card Distribution & Correction Notice for 1st Year Students',
    category: 'notice',
    department: 'Academic Section',
    date: '25 Jan 2026',
    fileSize: '620 KB',
    fileType: 'PDF',
    description: 'Notice regarding collecting official BTEB registration cards from respective department heads.'
  },

  // Academic Calendar
  {
    id: 'res-cal-academic-2026',
    title: 'Official Academic Calendar (2025-2026) - Directorate of Technical Education',
    category: 'calendar',
    department: 'Academic Council',
    date: '01 Jan 2026',
    fileSize: '1.8 MB',
    fileType: 'PDF',
    isNew: true,
    description: 'Comprehensive annual schedule containing semester start dates, vacation lists, mid-term weeks, and final exam windows.'
  },
  {
    id: 'res-cal-holiday-2026',
    title: 'Government & National Holidays List for Technical Institutes (Year 2026)',
    category: 'calendar',
    department: 'Administration',
    date: '01 Jan 2026',
    fileSize: '540 KB',
    fileType: 'PDF',
    description: 'Gazetted holiday list approved by the Ministry of Public Administration & Ministry of Education.'
  },

  // Download Forms
  {
    id: 'res-form-admit-card',
    title: 'Semester Final Exam Admit Card & Clearance Application Form',
    category: 'forms',
    department: 'Examination Section',
    date: 'Updated 2026',
    fileSize: '410 KB',
    fileType: 'PDF',
    isNew: true,
    description: 'Required clearance form for departmental lab dues, library returns, and hostel accounts prior to exam.'
  },
  {
    id: 'res-form-testimonial',
    title: 'Application Form for Student Testimonial & Character Certificate',
    category: 'forms',
    department: 'Principal Office',
    date: 'Updated 2026',
    fileSize: '320 KB',
    fileType: 'DOC',
    description: 'Standard institutional testimonial request format required for higher studies and job applications.'
  },
  {
    id: 'res-form-internship-clearance',
    title: 'Industrial Attachment (Internship) Joining & Completion Report Form',
    category: 'forms',
    department: 'Industrial Attachment Cell',
    date: 'Updated 2026',
    fileSize: '550 KB',
    fileType: 'PDF',
    description: 'Official reporting template with supervisor signature block for the 8th semester 6-month industrial training.'
  },
  {
    id: 'res-form-retake-drop',
    title: 'Course Retake / Subject Improvement Registration Form (BTEB)',
    category: 'forms',
    department: 'BTEB Academic Section',
    date: 'Updated 2026',
    fileSize: '380 KB',
    fileType: 'PDF',
    description: 'Prescribed format for students with referred/backlog subjects wishing to sit for upcoming board exams.'
  },
  {
    id: 'res-form-id-card-reissue',
    title: 'Application Form for Lost / Damaged Digital Student ID Card Reissue',
    category: 'forms',
    department: 'Security & Student Welfare',
    date: 'Updated 2026',
    fileSize: '290 KB',
    fileType: 'DOC',
    description: 'GD copy attachment form and nominal treasury challan slip for smart ID card replacement.'
  }
];

export const LATEST_NOTICES: NoticeItem[] = [
  {
    id: 'not-1',
    title: 'Distribution of Admit Cards for Diploma in Engineering Semester Final Exams 2026',
    date: '14 Feb 2026',
    category: 'Examination',
    summary: 'All regular and referred students of 2nd, 4th, 6th & 8th semesters are instructed to collect their admit cards after clearing departmental lab and library dues.',
    important: true,
    publishedBy: 'Controller of Examinations, SPI'
  },
  {
    id: 'not-2',
    title: 'Technical Education Stipend Scheme (PMT-BTEB) 2nd Phase Disbursement Verification',
    date: '12 Feb 2026',
    category: 'Scholarship',
    summary: 'Female students and eligible merit-based stipend recipients must verify their active registered mobile banking account numbers before February 28.',
    important: true,
    publishedBy: 'Student Welfare Section'
  },
  {
    id: 'not-3',
    title: 'Special Extra-Curricular Robotics & IoT Workshop by IEEE Student Branch',
    date: '10 Feb 2026',
    category: 'Academic',
    summary: 'Registration open for a 3-day hands-on workshop on Arduino, ESP32, and Industrial PLC automation in the SPI Central Auditorium.',
    important: false,
    publishedBy: 'Department of Computer Technology'
  },
  {
    id: 'not-4',
    title: 'Celebration of Historic National Technical Education Day at Sylhet Polytechnic Campus',
    date: '04 Feb 2026',
    category: 'General',
    summary: 'Annual science and engineering project showcase, cultural programme, and alumni gathering will be held on institute grounds.',
    important: false,
    publishedBy: 'Principal Secretariat'
  }
];

export const DEPARTMENTS_DATA: DepartmentInfo[] = [
  {
    name: 'Computer Science & Technology',
    shortName: 'CST',
    code: '685',
    headName: 'Engr. Mohammad Mahbubul Alam',
    intakeCapacity: 200,
    establishedYear: 1995,
    iconName: 'Laptop'
  },
  {
    name: 'Civil Technology',
    shortName: 'Civil',
    code: '664',
    headName: 'Engr. Kazi Tariqul Islam',
    intakeCapacity: 240,
    establishedYear: 1955,
    iconName: 'Building'
  },
  {
    name: 'Electrical Technology',
    shortName: 'Electrical',
    code: '667',
    headName: 'Engr. Md. Faruk Ahmed',
    intakeCapacity: 200,
    establishedYear: 1955,
    iconName: 'Zap'
  },
  {
    name: 'Mechanical Technology',
    shortName: 'Mechanical',
    code: '670',
    headName: 'Engr. Dewan Md. Nasir',
    intakeCapacity: 160,
    establishedYear: 1955,
    iconName: 'Cog'
  },
  {
    name: 'Electro-Medical Technology',
    shortName: 'Electro-Med',
    code: '686',
    headName: 'Engr. Shamima Nasrin',
    intakeCapacity: 100,
    establishedYear: 2002,
    iconName: 'Activity'
  },
  {
    name: 'Electronics Technology',
    shortName: 'Electronics',
    code: '668',
    headName: 'Engr. Anisur Rahman',
    intakeCapacity: 120,
    establishedYear: 1988,
    iconName: 'Cpu'
  },
  {
    name: 'Power Technology',
    shortName: 'Power',
    code: '671',
    headName: 'Engr. Md. Harun-Or-Rashid',
    intakeCapacity: 100,
    establishedYear: 1968,
    iconName: 'Gauge'
  }
];
