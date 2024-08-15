import { useAuthContext } from "@/context/AuthContext";
import CustomButton from "./custombutton";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/auth/logout-confirmation");
  };

  return (
    <>
      <CustomButton type="button" variant="destructive" onClick={handleLogout}>
        Logout
      </CustomButton>
    </>
  );
}
