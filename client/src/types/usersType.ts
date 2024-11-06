export interface UsersProps {
  id: string;
  username: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse {
  total: number;
  lastPage: number;
  currPage: number;
  rows: UsersProps[];
}

export interface UsersFormProps {
  username: string;
  email: string;
  password: string;
  role: string;
  id: string;
}

export interface UsersState {
  users: UsersProps[];
  isLoading: boolean;
  error: string | null;

  token: string | null;

  id: string;
  role: string;
  user: string;

  total: number;
  lastPage: number;
  currPage: number;

  initializeAuth: () => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchUsers: (page: number) => Promise<void>;
  fetchUserById: (id: string) => Promise<void>;
  createUser: (newUser: UsersFormProps) => Promise<void>;
  updateUser: (id: string, updatedBanner: UsersFormProps) => Promise<void>;
  onChangeStatus: (id: string, status: boolean) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
}
