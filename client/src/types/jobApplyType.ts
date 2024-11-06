export interface JobApplyProps {
    id?: string;
    resume: string;
    job_code: string;
    job_position: string;
    job_type: string;
    profile_image: string;
    title: string;
    firstname: string;
    lastname: string;
    nickname: string;
    age: string;
    gender: string;
    phone: string;
    telephone: string;
    address: string;
    email: string;
    rate_min: string;
    rate_max: string;
    personal_detail: string;
    en_skill: string;
    en_skill_file: string;
    jp_skill: string;
    jp_skill_file: string;
    ch_skill: string;
    ch_skill_file: string;
    kr_skill: string;
    kr_skill_file: string;
    other_skill: string;
    company_name: string;
    start_month: string;
    start_year: string;
    end_month: string;
    end_year: string;
    detail: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ApiResponse {
    total: number;
    lastPage: number;
    currPage: number;
    rows: JobApplyProps[];
}

export interface JobApplyState {
    items: JobApplyProps[];
    isLoading: boolean;
    error: string | null;

    total: number;
    lastPage: number;
    currPage: number;

    fetchItems: (page: number) => Promise<void>;
    fetchItemById: (id: string) => Promise<void>;
    createItem: (newItem: Omit<JobApplyProps, "id" | "createdAt" | "updatedAt">) => Promise<void>;
    updateItem: (id: string, updatedItem: Omit<JobApplyProps, "id" | "createdAt" | "updatedAt">) => Promise<void>;
    deleteItem: (id: string) => Promise<void>;
}
