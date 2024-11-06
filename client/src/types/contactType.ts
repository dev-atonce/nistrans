export interface ContactProps {
  id?: string;
  email?: string;
  email2?: string;
  email3?: string;
  addressTH?: string;
  telephone?: string;
  telephone2?: string;
  telephone3?: string;
  gMap?: string;
  facebook?: string;
  line?: string;
  tiktok?: string;
  instagram?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse {
  total: number;
  lastPage: number;
  currPage: number;
  rows: ContactProps[];
}

export interface ContactState {
  items: ContactProps[];
  isLoading: boolean;
  error: string | null;
  total: number;
  lastPage: number;
  currPage: number;

  fetchItems: (page: number) => Promise<void>;
  fetchItemById: (id: string) => Promise<void>;
  updateItem: (updatedItem: ContactState) => Promise<void>;
}
