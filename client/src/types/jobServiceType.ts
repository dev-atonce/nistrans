export interface JobServiceProps {
    id: string;
    service_name_th: string;
    service_name_en: string;
    service_detail: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ApiResponse {
    total: number;
    lastPage: number;
    currPage: number;
    rows: JobServiceProps[];
}

export interface JobServiceState {
    items: JobServiceProps[];
    isLoading: boolean;
    error: string | null;

    total: number;
    lastPage: number;
    currPage: number;

    fetchItems: (page: number) => Promise<void>;
    fetchItemById: (id: string) => Promise<void>;
    createItem: (newItem: Omit<JobServiceProps, "id" | "status" | "createdAt" | "updatedAt">) => Promise<void>;
    updateItem: (id: string, updatedItem: Omit<JobServiceProps, "id" | "status" | "createdAt" | "updatedAt">) => Promise<void>;
    onChangeStatus: (id: string, status: boolean) => Promise<void>;
    deleteItem: (id: string) => Promise<void>;
}
