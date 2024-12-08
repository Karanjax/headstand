export type InstructorListData = {
  id?: number | string;
  name: string;
  certifications: string;
  image: string;
  title: string;
  description: string;
  specialties: string;
};

export interface InstructorType {
  activeTab: string;
  createdFormData: InstructorListData[];
}

export interface CommonInstructorInterFace {
  item: InstructorListData;
}

export interface InstructorInitialValue {
  name: string;
  certifications: string;
  image: string;
  title: string;
  description: string;
  specialties: string;
}