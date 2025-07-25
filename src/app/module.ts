export interface Nurse {
  id: number;
  name: string;
  department?: string;
  shift: string;
}

export interface Patient {
  id: number;
  name: string;
  age: number;  
  admissionDate?: string;
  diagnosis?: string;
}

export interface report {
  id: number;
  patientId: number;
  nurseId: number;
  reportDate: string;  
}
