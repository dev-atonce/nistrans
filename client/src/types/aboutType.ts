export interface AboutProps {
  id?: string;
  detail?: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface logoProps {
  id?: string;
  image?: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AboutState {
  items: AboutProps[];
  isLoading: boolean;
  error: string | null;
  total: number;
  lastPage: number;
  currPage: number;

  fetchItemByType: (type: string) => Promise<void>;
  updateLogo: (updatedItem: File | string, type: string) => Promise<void>;
  updateItem: (type: string, updatedAbout: AboutProps) => Promise<void>;

}
