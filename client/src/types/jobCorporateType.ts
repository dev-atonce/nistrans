export interface JobCorporateProps {
  id: string;
  company_name: string;
  contact_name: string;
  phone: string;
  email: string;
  title: string;
  detail: string;
  status: boolean;
  createdAt: string;
}

export interface ApiResponse {
  total: number;
  lastPage: number;
  currPage: number;
  rows: JobCorporateProps[];
}

export interface JobCorporateState {
  contacts: JobCorporateProps[];
  isLoading: boolean;
  error: string | null;

  total: number;
  lastPage: number;
  currPage: number;

  fetchContact: (page: number) => Promise<void>;
  fetchContactById: (id: string) => Promise<void>;
  onChangeStatus: (id: string, status: boolean) => Promise<void>;
  deleteContact: (id: string) => Promise<void>;
}
