export interface BlogProps {
  id: string;
  blog_image?: string;
  blog_title_th: string;
  blog_title_en: string;
  blog_title_jp: string;
  blog_description_th?: string;
  blog_description_en?: string;
  blog_description_jp?: string;
  blog_detail_th: string;
  blog_detail_en: string;
  blog_detail_jp: string;
  type?: string;
  attachment?: string;
  location?: string;
  slug?: string;
  sort?: number;
  status?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse {
  total: number;
  lastPage: number;
  currPage: number;
  rows: BlogProps[];
}

export interface BlogState {
  items: BlogProps[];
  isLoading: boolean;
  error: string | null;

  total: number;
  lastPage: number;
  currPage: number;

  fetchItems: (page: number, type: string) => Promise<void>;
  fetchItemById: (id: string) => Promise<void>;
  createItem: (newItem: Omit<BlogProps, "id" | "status" | "createdAt" | "updatedAt">, type: string) => Promise<boolean>;
  updateItem: (id: string, updatedItem: Omit<BlogProps, "id" | "status" | "createdAt" | "updatedAt">) => Promise<boolean>;
  onChangeStatus: (id: string, status: boolean) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
}
