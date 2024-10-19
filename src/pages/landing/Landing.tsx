import Loading from "@/components/Loading";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/auth/login");
    }, 2000);
  }, [navigate]);
  return <Loading />;
}

export default Landing;
