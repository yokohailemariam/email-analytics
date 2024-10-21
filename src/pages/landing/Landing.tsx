import Loading from "@/components/Loading";
import { useAuthStore } from "@/hooks/store";
import { useEffect } from "react";

// import Cookies from "js-cookie";

function Landing() {
  //   const authToken = new URLSearchParams(window.location.search).get(
  //     "auth_token"
  //   );

  //   useEffect(() => {
  //     if (authToken) Cookies.set("credentials", authToken);
  //   }, [authToken]);

  const checkAuthentication = useAuthStore(
    (state) => state.checkAuthentication
  );
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    checkAuthentication();
    console.log(
      isAuthenticated ? "User is authenticated" : "User is not authenticated"
    );
  }, [checkAuthentication, isAuthenticated]);
  return <Loading />;
}

export default Landing;
