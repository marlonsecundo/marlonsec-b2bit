import { useAuthContext } from "@/modules/auth/context/auth.context";
import { useNavigate, useNavigation } from "react-router-dom";

export function useController() {
  const { logoutUser } = useAuthContext();

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logoutUser();

    navigate("/", { replace: true });
  };

  return { handleLogoutClick };
}
