import { useQuery } from "@tanstack/react-query";
import { api } from "@/modules/api";
import { ProfileModel } from "@/modules/shared/models/profile.model";
import { useMemo } from "react";
import { QueryParams } from "@/types/react-query.types";

const key1 = "read-user-profile-query";
export const useReadUserProfileQuery = ({ enabled, params }: QueryParams) => {
  const query = useQuery({
    queryKey: [key1, params, enabled],
    queryFn: async () => {
      const response = await api.get<ProfileModel>("/auth/profile/");
      return response;
    },
    enabled,
  });

  const profile: ProfileModel | undefined = useMemo(() => {
    return query.data?.data;
  }, [query.data?.data]);

  return { profile, query };
};
useReadUserProfileQuery.key = key1;
