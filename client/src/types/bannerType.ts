export interface BannerProps {
    id: string;
    title: string;
    image: string;
    image_alt: string;
    link: string;
    status: boolean;
    createdAt: string;
}

export interface ApiResponse {
    total: number;
    lastPage: number;
    currPage: number;
    rows: BannerProps[];
}

export interface BannerFormProps {
    title: string;
    image: string | File;
    image_alt: string;
    link: string;
}

export interface BannerState {
    banners: BannerProps[];
    isLoading: boolean;
    error: string | null;

    total: number;
    lastPage: number;
    currPage: number;

    fetchBanners: (page: number) => Promise<void>;
    fetchBannerById: (id: string) => Promise<void>;
    createBanner: (newBanner: BannerFormProps) => Promise<void>;
    updateBanner: (id: string, updatedBanner: BannerFormProps) => Promise<void>;
    onChangeStatus: (id: string, status: boolean) => Promise<void>;
    deleteBanner: (id: string) => Promise<void>;
}
