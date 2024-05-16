import { AuthToken } from "./auth-token.model";
import { UserModel } from "./user.model";

export interface UserAuthModel {
  user?: UserModel;
  tokens?: AuthToken;
}
