export interface UserModel {
  id: number;
  name: string;
  email: string;
  is_active: boolean;
  avatar?: string;
  type: string;
  created: string;
  modified: string;
  role: string;
}
