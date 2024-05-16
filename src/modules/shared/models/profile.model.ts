import { AvatarModel } from "./avatar.model";
import { RoleModel } from "./role.model";

export interface ProfileModel {
  id: string;
  avatar?: AvatarModel;
  name: string;
  last_name: string;
  email: string;
  role: RoleModel;
  last_login: string;
  staff_role: RoleModel;
}
