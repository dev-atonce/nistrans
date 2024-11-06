export interface SeoProps {
    id?: string;
  page?: string;
  seoDescriptionTH: string;
  seoKeywordTH: string;
  seoTitleTH: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse {
  total: number;
  lastPage: number;
  currPage: number;
  rows: SeoProps[];
}

export interface SeoState {
  items: SeoProps[];
  isLoading: boolean;
  error: string | null;
  total: number;
  lastPage: number;
  currPage: number;

  fetchItems: (page: number) => Promise<void>;
  fetchItemById: (id: string) => Promise<void>;
  updateItem: (id: string, updatedSeo: SeoProps) => Promise<void>;

}
