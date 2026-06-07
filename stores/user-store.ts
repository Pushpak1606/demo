import { create } from 'zustand';

// Temporary types until complete typings are added
export interface PatientProfile {
  id: string;
  name: string;
  email: string;
}

export interface DoctorProfile {
  id: string;
  name: string;
  email: string;
  specialty: string;
}

interface UserState {
  patient: PatientProfile | null;
  doctor: DoctorProfile | null;
  setPatient: (p: PatientProfile) => void;
  setDoctor: (d: DoctorProfile) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  patient: null,
  doctor: null,
  setPatient: (patient) => set({ patient }),
  setDoctor: (doctor) => set({ doctor }),
  clearUser: () => set({ patient: null, doctor: null }),
}));
