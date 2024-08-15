import { useEffect } from "react";
import { useRouter } from "next/router";

const CallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleToken = () => {
      const { access_token } = router.query;

      if (typeof access_token === "string") {
        sessionStorage.setItem("access_token", access_token);

        window.location.href = "/";
      }
    };

    handleToken();
  }, [router.query]);

  return <div>Processing...</div>;
};

export default CallbackPage;
