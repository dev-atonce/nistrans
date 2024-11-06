export interface JobInformationProps {
    id?: string;
    resume: string;
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
    location: string;
    email: string;
    rate_min: string;
    rate_max: string;
    personal_detail: string;
    interest_job_1: string;
    interest_job_2: string;
    interest_job_3: string;
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
    remark?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ApiResponse {
    total: number;
    lastPage: number;
    currPage: number;
    rows: JobInformationProps[];
}

export interface JobInformationState {
    items: JobInformationProps[];
    isLoading: boolean;
    error: string | null;

    total: number;
    lastPage: number;
    currPage: number;

    fetchItems: (page: number) => Promise<void>;
    fetchItemById: (id: string) => Promise<void>;
    createItem: (newItem: Omit<JobInformationProps, "id" | "createdAt" | "updatedAt">) => Promise<void>;
    updateItem: (id: string, updatedItem: Omit<JobInformationProps, "id" | "createdAt" | "updatedAt">) => Promise<void>;
    deleteItem: (id: string) => Promise<void>;
}
