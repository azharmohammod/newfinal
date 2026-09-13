import React from 'react';
import { 
  X, 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  GraduationCap, 
  Users, 
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  Laptop,
  Building,
  Zap,
  Cog,
  Activity,
  Gauge
} from 'lucide-react';
import { DEPARTMENTS_DATA } from '../data/mockData';

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<ModalBaseProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#003822] text-white px-6 py-4 flex items-center justify-between border-b-2 border-emerald-400">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-300" />
            <h3 className="text-base font-bold">About Sylhet Polytechnic Institute</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-sm text-slate-700 leading-relaxed">
          <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#003822] text-amber-300 font-serif font-bold text-xl flex items-center justify-center shrink-0 border border-emerald-400">
              1955
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">Estd. 1955 • Historic Premier Institute</h4>
              <p className="text-xs text-emerald-800">
                A pioneer in technical engineering education in north-eastern Bangladesh.
              </p>
            </div>
          </div>

          <p>
            <strong>Sylhet Polytechnic Institute (SPI)</strong> is a premier government technical education institution located in Kazitula, Sylhet, Bangladesh. It operates under the Directorate of Technical Education (DTE) and is affiliated with the Bangladesh Technical Education Board (BTEB), Dhaka.
          </p>

          <h4 className="font-bold text-slate-900 text-base pt-2 border-t border-slate-200">
            Academic Excellence & Facilities
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Offering 4-year Diploma in Engineering across 7 distinct specialized engineering disciplines.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Modern computer labs, electronic workshops, machine shops, civil surveying equipment, and biomedical testing centers.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>1st & 2nd shift academic curriculum providing flexible learning for thousands of talented diploma engineers.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Strong industrial attachment programs connecting graduates to national and international tech employers.</span>
            </li>
          </ul>

          <div className="bg-slate-100 p-3 rounded-lg text-xs text-slate-600">
            <strong>BTEB Institute Code:</strong> 61016 | <strong>Division:</strong> Sylhet | <strong>Campus Area:</strong> 20+ Acres
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#003822] hover:bg-[#002818] text-white text-xs font-bold rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const DepartmentsModal: React.FC<ModalBaseProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const getDeptIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return Laptop;
      case 'Building': return Building;
      case 'Zap': return Zap;
      case 'Cog': return Cog;
      case 'Activity': return Activity;
      case 'Cpu': return Cpu;
      default: return Gauge;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#003822] text-white px-6 py-4 flex items-center justify-between border-b-2 border-emerald-400">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-300" />
            <h3 className="text-base font-bold">Academic Departments & Technologies</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-4">
          <p className="text-xs sm:text-sm text-slate-600">
            Sylhet Polytechnic Institute offers 4-year Diploma in Engineering degrees in 7 recognized technologies approved by BTEB.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DEPARTMENTS_DATA.map((dept) => {
              const Icon = getDeptIcon(dept.iconName);
              return (
                <div key={dept.code} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{dept.name}</h4>
                      <span className="text-[11px] font-mono text-emerald-800 font-semibold">Tech Code: {dept.code}</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 space-y-1 pt-2 border-t border-slate-200/80">
                    <div><strong>Head:</strong> {dept.headName}</div>
                    <div className="flex justify-between">
                      <span><strong>Intake Capacity:</strong> {dept.intakeCapacity} seats</span>
                      <span><strong>Estd:</strong> {dept.establishedYear}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#003822] hover:bg-[#002818] text-white text-xs font-bold rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const ContactModal: React.FC<ModalBaseProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#003822] text-white px-6 py-4 flex items-center justify-between border-b-2 border-emerald-400">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-emerald-300" />
            <h3 className="text-base font-bold">Institute Contact & Address</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-sm text-slate-700">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900">Campus Location</strong>
                <span>Technical Road, Kazitula, Sylhet - 3100, Bangladesh</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900">Telephone / Helpline</strong>
                <span>General Office: +880 821-713297</span>
                <span className="block">Principal Secretariat: +880 821-716442</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900">Official Email</strong>
                <span>info@spi.gov.bd / principal@spi.gov.bd</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900">Administrative Office Hours</strong>
                <span>Sunday - Thursday: 9:00 AM - 5:00 PM (Friday & Saturday Closed)</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-emerald-50 rounded-lg text-xs text-emerald-900 border border-emerald-200">
            For student registration queries or certificate verification, contact the Academic Registrar section directly.
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#003822] hover:bg-[#002818] text-white text-xs font-bold rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
