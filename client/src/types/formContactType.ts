export interface FormContactProps {
  id: string;
  contactName: string;
  companyName: string;
  telephone: string;
  email: string;
  detail: string;
  status: boolean;
  createdAt: string;
}

export interface ApiResponse {
  total: number;
  lastPage: number;
  currPage: number;
  rows: FormContactProps[];
}

export interface FormContactState {
  contacts: FormContactProps[];
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
