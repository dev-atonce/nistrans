export interface JobPostProps {
    id: string;
    job_code: string;
    job_position: string;
    job_type: string;
    en_skill: string;
    jp_skill: string;
    ch_skill: string;
    kr_skill: string;
    job_description: string;
    salary: string;
    location: string;
    province: string;
    status: boolean;
    staff_name: string;
    createdAt: string;
    updatedAt: string;
}

export interface ApiResponse {
    total: number;
    lastPage: number;
    currPage: number;
    rows: JobPostProps[];
}

export interface JobPostState {
    jobposts: JobPostProps[];
    isLoading: boolean;
    error: string | null;

    total: number;
    lastPage: number;
    currPage: number;

    fetchJobPosts: (page: number) => Promise<void>;
    fetchJobPostById: (id: string) => Promise<void>;
    createJobPost: (newJobPost: Omit<JobPostProps, "id" | "status" | "createdAt" | "updatedAt" | "job_code">) => Promise<void>;
    updateJobPost: (id: string, updatedJobPost: Omit<JobPostProps, "id" | "status" | "createdAt" | "updatedAt" | "job_code">) => Promise<void>;
    onChangeStatus: (id: string, status: boolean) => Promise<void>;
    deleteJobPost: (id: string) => Promise<void>;
}
