import { useAuthContext } from "@/modules/auth/context/auth.context";
import { useNavigate } from "react-router-dom";

export function useController() {
  const { logoutUser, isAuthenticated } = useAuthContext();

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logoutUser();

    navigate("/", { replace: true });
  };

  return { handleLogoutClick, isAuthenticated };
}
