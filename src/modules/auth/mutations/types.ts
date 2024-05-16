export interface CreateLoginRequest {
  email: string;
  password: string;
}

export interface CreateLoginResponse {
  user?: {
    id: number;
    name: string;
    email: string;
    is_active: boolean;
    avatar?: string;
    type: string;
    created: string;
    modified: string;
    role: string;
  };
  tokens?: {
    refresh: string;
    access: string;
  };
}
