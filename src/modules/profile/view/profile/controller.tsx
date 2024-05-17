import { useAuthContext } from "modules/auth/context/auth.context";
import { useReadUserProfileQuery } from "modules/profile/queries/profile.query";

export const useController = () => {
  const { user } = useAuthContext();

  const { profile, query } = useReadUserProfileQuery({
    enabled: user?.id !== undefined,
    params: {},
  });

  const isLoading = query.isFetching;

  return { profile, isLoading };
};
