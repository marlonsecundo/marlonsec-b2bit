import { AvatarModel } from "./avatar.model";
import { RoleModel } from "./role.model";

export interface ProfileModel {
  id: string;
  avatar?: AvatarModel;
  name: string;
  email: string;
  role: string;
  is_active: boolean;
  type: string;
  created: string;
  modified: string;
}
