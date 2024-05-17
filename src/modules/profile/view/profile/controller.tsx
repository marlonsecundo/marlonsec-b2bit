import { useAuthContext } from "modules/auth/context/auth.context";
import { useReadUserProfileQuery } from "modules/profile/queries/profile.query";

export const useController = () => {
  const { user } = useAuthContext();

  console.log({ user });

  const { profile } = useReadUserProfileQuery({
    enabled: user?.id !== undefined,
    params: {},
  });

  return { profile };
};
