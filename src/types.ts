export type ShiftType = '1st Shift' | '2nd Shift';

export interface SubjectItem {
  code: string;
  name: string;
  credit: number;
  type: 'Theory' | 'Practical' | 'Theory + Practical';
  grade?: string;
  gradePoint?: number;
}

export interface SemesterResult {
  semester: string;
  gpa: number;
  status: 'Passed' | 'Referred' | 'In Progress';
  session: string;
}

export interface Student {
  id: string;
  name: string;
  nameBn?: string;
  roll: string;
  registration: string;
  technology: string;
  technologyCode: string;
  department: string;
  semester: string;
  session: string;
  shift: ShiftType;
  group?: string;
  status: 'Regular' | 'Irregular' | 'Graduated';
  cgpa: number;
  bloodGroup: string;
  fatherName: string;
  motherName: string;
  email: string;
  phone: string;
  dob: string;
  district: string;
  admissionSession: string;
  avatarUrl: string;
  btebCurriculum: string;
  advisor: {
    name: string;
    designation: string;
    phone: string;
  };
  subjects: SubjectItem[];
  semesterResults: SemesterResult[];
  attendance: {
    percentage: number;
    presentDays: number;
    totalDays: number;
  };
  feesStatus: {
    isPaid: boolean;
    dueAmount: number;
    lastPaymentDate: string;
  };
}

export type ResourceCategory = 
  | 'routine' 
  | 'exam' 
  | 'result' 
  | 'notice' 
  | 'calendar' 
  | 'forms';

export interface ResourceItem {
  id: string;
  title: string;
  category: ResourceCategory;
  department?: string;
  semester?: string;
  date: string;
  fileSize: string;
  fileType: 'PDF' | 'DOC' | 'XLS' | 'LINK';
  downloadUrl?: string;
  description?: string;
  isNew?: boolean;
}

export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Examination' | 'Scholarship' | 'Admission' | 'General';
  summary: string;
  important?: boolean;
  publishedBy: string;
  pdfUrl?: string;
}

export interface DepartmentInfo {
  name: string;
  shortName: string;
  code: string;
  headName: string;
  intakeCapacity: number;
  establishedYear: number;
  iconName: string;
}
